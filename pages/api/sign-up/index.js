import { tokenService } from '@/services/authService/tokenService'
import db from '../../../src/lib/database'
import { generateHash } from '../../../src/utils/tools'
import { UserRepository } from '@/repository/Users/UserRepository'
import { UserSchema } from '../../../src/schemas/user'
import { OmieClient } from '../../../components/infra/OmieClient/index'

export default async function handler (req, res) {
    const existingUser = await UserRepository.getUserByEmail(req.body.email)

    const valid_schema = UserSchema.createUserSchema(req.body)

    if (!valid_schema) {
        res.status(400).json({
            message: 'Dados inválidos'
        })
        return
    }
    
    if (existingUser) {
        res.status(401).json({ message: 'Login Inválido' })
        return
    }

    const hashedPassword = await generateHash(req.body.password)

    const trx = await db.transaction();
    
    const id = await trx('users').insert({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
        cell: req.body.cell,
        document_number: req.body.documentNumber
    })


    OmieClient()

    const access_token = await tokenService.generateAccessToken(id[0]);
    const refresh_token = await tokenService.generateRefreshToken(id[0]);
    
    await UserRepository.updateRefreshToken(id[0], refresh_token)
    
    trx.commit()
    res.status(200).json({ 
        access_token: access_token
    })
    
}