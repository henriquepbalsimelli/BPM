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

}