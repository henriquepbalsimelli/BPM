import { HttpClient } from "@/components/infra/HttpClient/HttpClient"
import { tokenService } from "./tokenService"

export const authService = {
    login: async (credentials) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        
        const response = await HttpClient(`${API_URL}/api/login`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (!response.ok) {throw new Error('Login Inválido')}
            tokenService.save(response.body.access_token)
            return response.body
        })
    },
}