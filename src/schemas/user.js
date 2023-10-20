import { object, string, number } from 'yup';

export const UserSchema = {
    updateUserDataSchema: async(body) => {
        try{
            const schema = object({
                name: string().required(),
                email: string().required(),
                id: number().required(),
                password: string().nullable()
            });
            
            
            return await schema.validate(body);
        }catch(error){
            console.error(error)
            return false
        }
    }
}