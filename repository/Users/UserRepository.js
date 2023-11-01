import db from '../../src/lib/database'

export const UserRepository = {
    getUserByEmail: async (email) => {
        try {
            const user = await db.select()
                .from('users')
                .where('email', email)
                .first()
            return user
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao buscar usuário por email')
        }
    },
    getUserById: async (id) => {
        const user = await db.select()
            .from('users')
            .where('id', id)
            .first()
        return user
    },
    getUserByIdAndRefreshToken: async (id, refresh_token) => {
        const user = await db.select()
            .from('users')
            .where({
                'id': id,
                'refresh_token': refresh_token
            })
            .first()
        return user
    },
    updateRefreshToken: async (id, refresh_token) => {
        try {
            await db('users').update(
                {
                    'refresh_token': refresh_token
                }
            ).where({ 'id': id })
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao atualizar refresh token')
        }
    },
    updateUser: async (userData) => {
        return await db('users').update(
            userData
        ).where({ 'id': userData.id }
        )
    }

}