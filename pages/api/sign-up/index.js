import db from '../../../src/lib/database'
import { UserSchema } from '../../../src/schemas/user'
import { ApiUserService } from '../../../services/user/api/apiUserService'

export default async function handler(req, res) {
    const trx = await db.transaction()
    try {
        const valid_schema = UserSchema.createUserSchema(req.body)

        if (!valid_schema) {
            res.status(400).json({
                message: 'Dados inválidos'
            })
            return
        }

        const apiUserService = new ApiUserService()

        const data = await apiUserService.createUser(req.body, trx)

        trx.commit()
        res.status(200).json({
            access_token: data.accessToken
        })
    } catch (error) {
        trx.rollback()
        console.log(error)
        res.status(500).json({ message: error.message })
    }



}