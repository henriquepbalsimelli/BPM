import { HttpClient } from "@/components/infra/HttpClient/HttpClient"
import { tokenService } from "./tokenService"
import {getSessionData} from "@/pages/api/session"


export const authService = {
    login: async (credentials) => {
        
        const response = await HttpClient(`/api/login`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (!response.ok) {throw new Error(response.body.message)}
            tokenService.save(response.body.access_token)
            return response.body
        })
    },

    signUp: async (credentials) => {
        const response = await HttpClient(`/api/sign-up`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (!response.ok) {throw new Error(response.body.message)}
            tokenService.save(response.body.access_token)
            return response.body
        })
    },

    getSession: async (ctx) => {
        const token = tokenService.get(ctx)

        const session = await getSessionData(token)

        return session

    
    },

    getSessionClientSide: async () => {
        const token = tokenService.get()

        if(!token){
            return
        }

        return await HttpClient(`/api/session`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                
                if (!response.ok) throw new Error('Nao autrizado')
                return response.body
            })
            .catch((error)=>{
                throw new Error(error)
            })

    },
    logout: async () => {
        tokenService.delete()
    }

}