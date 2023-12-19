import { OrderSchema } from "../../../src/schemas/orderSchema";


const controllers = {
    async createOrder(req, res) {
        try{

            const { body } = req;
    
            const valid_schema = await OrderSchema.createOrderSchema(body)
    
            res.status(200).json({
                message: 'FOI',
                data: valid_schema
            })
        }catch(error){
            res.status(400).json({
                message: 'Não foi',
                data: error
            })
        }
    }
};


const controllerBy = {
    POST: controllers.createOrder,
    OPTIONS: (_, res) => res.send('OK'),
}

export default function handler(req, res) {
    if (controllerBy[req.method]) return controllerBy[req.method](req, res);

    res.status(404).json({
        status: 404,
        message: 'Not Found'
    });
}