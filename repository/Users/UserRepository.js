import db from '../../src/lib/database'

export const UserRepository = {
    getUserByEmail: async(email) => {
        const user = await db.select()
            .from('users')
            .where('email', email)
            .first()
        return user
    },
    getUserById: async(id) => {
        const user = await db.select()
            .from('users')
            .where('id', id)
            .first()
        return user
    },
    getUserByIdAndRefreshToken: async(id, refresh_token) => {
        const user = await db.select()
            .from('users')
            .where({
                'id': id,
                'refresh_token': refresh_token
            })
            .first()
        return user
    },
    updateRefreshToken: async(id, refresh_token) => {
        await db('users').update(
            {
                'refresh_token': refresh_token
            }
        ).where({'id': id})
    }

}