import { HttpClient } from "@/components/infra/HttpClient/HttpClient"


export const UserService = {
    updateUser: async (credentials) => {
        const response = await HttpClient(`/api/user`, {
            method: 'PUT',
            body: credentials
        })
            .then((response) => {
                if (!response.ok) { throw new Error(response.body.message) }
                return response.body
            })
    },
}