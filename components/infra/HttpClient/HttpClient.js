import { tokenService } from "@/services/authService/tokenService"

export async function HttpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
    })
        .then(async (response) => {
            return {
                body: await response.json(),
                ok: response.ok,
                status: response.status,
                statusText: response.statusText
            }
        })
        .then(async (response) => {
            if (!fetchOptions.refresh) return response
            if (response.status !== 401) return response
            const refreshResponse = await HttpClient(`/api/refreshToken`, {
                method: 'GET'
            })
            const newAccessToken = refreshResponse.body.access_token

            tokenService.save(newAccessToken)

            const retryResponse = await HttpClient(fetchUrl, {
                ...fetchOptions,
                refresh: false,
                headers: {
                    'authorization': `Bearer ${newAccessToken}`
                }
            })

            return retryResponse
        })
}