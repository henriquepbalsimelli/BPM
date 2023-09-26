import { HttpClient } from "@/components/infra/HttpClient/HttpClient"

export const authService = {
    login: async (credentials) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        console.log(process.env)
        const response = await HttpClient(`${API_URL}/api/login`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (response.ok) {
                return response.body
            }
            throw new Error('Login Inválido')
        })
    },
}