import { tokenService } from '@/services/authService/tokenService'
import db from '../../../src/lib/database'
import { generateHash } from '../../../src/utils/tools'

export default async function handler (req, res) {
    const existingUser = await db.select()
        .from('users')
        .where('email', req.body.email)
        .first()
    
    if (existingUser) {
        res.status(401).json({ message: 'Login Inválido XX' })
        return
    }
    const hashedPassword = await generateHash(req.body.password)
    
    const id = await db('users').insert({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    })

    const access_token = await tokenService.generateAccessToken(id);
    const refresh_token = await tokenService.generateRefreshToken(id);
    
    res.status(200).json({ 
        access_token: access_token,
        refresh_token: refresh_token
    })
    
}