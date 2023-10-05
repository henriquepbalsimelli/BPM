import { compareHash } from "../../src/utils/tools";
import { UserRepository } from "../../repository/Users/UserRepository";
import { authService } from "../../services/authService/authService";
import { tokenService } from "@/services/authService/tokenService";

export default async function handler(req, res) {    
    const email = req.body.email

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
    
    res.status(200).json({ 
        message: 'Hello from Next.js!',
        access_token: access_token,
        refresh_token: refresh_token
    })
} 