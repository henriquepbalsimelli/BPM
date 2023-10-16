import { UserRepository } from "@/repository/Users/UserRepository"
import nookies from 'nookies'

const REFRESH_TOKEN = process.env.REFRESH_TOKEN

export async function logout(id, ctx){
    try{
        nookies.destroy(ctx, REFRESH_TOKEN, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/'
        })
        await UserRepository.updateRefreshToken(id, null)
    }catch(error){
        throw new Error(error)
    }
}



export default async function handler(req, res) {
    try{
        const id = req.body.id
        const ctx = {req, res}

        await logout(id, ctx)

        res.status(200).json({message: 'Logout realizado com sucesso'})
    
    }catch(error){
        res.status(500).json({error: error.message})
    }
}