export async function HttpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
    })
        .then(async(response) => {
            if (response.ok) {
                return {
                    body: await response.json(),
                    ok: response.ok
                }
            }
            throw new Error('Login Inválido')
        })
}