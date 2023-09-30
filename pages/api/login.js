import db from "../../src/lib/database";
import hashService from "../../src/utils/tools";

export default async function handler(req, res) {    
    const email = req.body.email
    const user = await db("users")
        .where("email", email)
        .select()
        .first()

    if (!user) {
        res.status(401).json({ message: 'Usuário não encontrado' })
        return
    }

    const validPassword = await hashService.compareHash(req.body.password, user.password)

    if (!validPassword){
        res.status(401).json({ message: 'Login Inválido' })
        return
    }

    const access_token = (Math.random() + 1).toString(36).substring(7)
    
    res.status(200).json({ 
        message: 'Hello from Next.js!',
        access_token: access_token 
    })
} 