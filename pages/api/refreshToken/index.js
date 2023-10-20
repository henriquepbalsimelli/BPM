import { UserRepository } from "../../../repository/Users/UserRepository";
import { tokenService } from "@/services/authService/tokenService";
import nookies from 'nookies'

const REFRESH_TOKEN = process.env.REFRESH_TOKEN

export default async function handler(req, res) {

    const ctx = {req, res}
    const cookies = nookies.get(ctx)
    const refresh_token = cookies[REFRESH_TOKEN]

    if (!refresh_token) {
        return res.status(401).json({
            error: {
                status: 401,
                message: 'Invalid refresh token, please login again.',
            }
        });
    }

    const { sub } = await tokenService.validateRefreshToken(refresh_token)
    const id = sub

    const user = await UserRepository.getUserByIdAndRefreshToken(id, refresh_token)
    if (!user) {
        return res.status(401).json({
            error: {
                status: 401,
                message: 'Invalid refresh token, please login again.',
            }
        });
    }
    
    const tokens = {
        access_token: await tokenService.generateAccessToken(id),
        refresh_token: await tokenService.generateRefreshToken(id),
    };
    
    nookies.set(ctx, REFRESH_TOKEN, tokens.refresh_token, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/'
    })

    await UserRepository.updateRefreshToken(id, tokens.refresh_token)

    res.status(200).json(tokens)
} 