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
    },

    createUserSchema: async(body) => {
        try{
            const schema = object({
                name: string().required(),
                email: string().required(),
                password: string().required(),
                cell: string().required(),
                documentNumber: string().required()
            });
            
            return await schema.validate(body);
        }catch(error){
            console.error(error)
            return false
        }
    }
}