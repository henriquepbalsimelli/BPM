import db from '../../src/lib/database'

export const UserRepository = {
    getUserByEmail: async() => {
        const user = await db.select()
            .from('users')
            .where('email', req.body.email)
            .first()
        return user
    } 
}