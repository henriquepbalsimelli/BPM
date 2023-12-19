import { object, string, number, array } from 'yup';

export const OrderSchema = {
    createOrderSchema: async (body) => {
        try {
            const schema = object({
                items: array().of(
                    object({
                        productCode: number().required(),
                        quantity: number().required()
                    })
                ).required(),
                userId: number().required()
            });

            return await schema.validate(body);
        } catch (error) {
            console.error(error)
            return false
        }
    }

}