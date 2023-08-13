
const API_URL = process.env.API_URL

export default async function getData () {
    return await fetch(`${API_URL}/data`)
        .then((res) => res.json())
}