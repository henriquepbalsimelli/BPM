import { compareHash } from "../../src/utils/tools";
import { UserRepository } from "../../repository/Users/UserRepository";
import { tokenService } from "@/services/authService/tokenService";
import nookies from 'nookies'

const REFRESH_TOKEN = process.env.REFRESH_TOKEN


export default async function handler(req, res) {    
    const email = req.body.email
    const ctx = {req, res}

    const user = await UserRepository.getUserByEmail(email)

    if (!user) {
        res.status(401).json({ message: 'Usuário não encontrado' })
        return
    }

    const validPassword = await compareHash(req.body.password, user.password)

    if (!validPassword){
        res.status(401).json({ message: 'Login Inválido' })
        return
    }

    const access_token = await tokenService.generateAccessToken(user.id);
    const refresh_token = await tokenService.generateRefreshToken(user.id);

    await UserRepository.updateRefreshToken(user.id, refresh_token)

    nookies.set(ctx, REFRESH_TOKEN, refresh_token, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
    })

    
    res.status(200).json({ 
        access_token: access_token
    })
} 