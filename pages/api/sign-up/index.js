import db from '../../../src/lib/database'
import {generateHash} from '../../../src/utils/tools'

export default async function handler (req, res) {
    const user = await db.select()
        .from('users')
        .where('email', req.body.email)
        .first()
    
    if (user) {
        res.status(401).json({ message: 'Login Inválido XX' })
        return
    }
    const hashedPassword = await generateHash(req.body.password)
    
    const id = await db('users').insert({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    })

    res.status(200).json({ id: id })
    
}