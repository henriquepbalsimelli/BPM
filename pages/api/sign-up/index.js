import { tokenService } from '@/services/authService/tokenService'
import db from '../../../src/lib/database'
import { generateHash } from '../../../src/utils/tools'
import { UserRepository } from '@/repository/Users/UserRepository'

export default async function handler (req, res) {
    const existingUser = await UserRepository.getUserByEmail(req.body.email)
    
    if (existingUser) {
        res.status(401).json({ message: 'Login Inválido' })
        return
    }
    const hashedPassword = await generateHash(req.body.password)
    
    const id = await db('users').insert({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    })

    const access_token = await tokenService.generateAccessToken(id[0]);
    const refresh_token = await tokenService.generateRefreshToken(id[0]);

    await UserRepository.updateRefreshToken(id[0], refresh_token)
    
    res.status(200).json({ 
        access_token: access_token
    })
    
}