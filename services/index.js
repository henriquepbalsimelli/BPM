
const API_URL = process.env.API_URL

export default async function getData () {
    // return await fetch(`${API_URL}/data`)
    //     .then((res) => res.json())
    return {
        data: [
            {
                id: 1,
                title: 'Post 1',
                body: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.',
            },
            {
                id: 2,
                title: 'Post 2',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.',
            },
        ]
    }
}