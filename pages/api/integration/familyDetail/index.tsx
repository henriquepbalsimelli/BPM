import { ApiProductsService } from "../../../../services/Products/api/apiProductsService"

export default async function handler(req: any, res: any) {
    try {

        const productService = new ApiProductsService()

        const body = req.body

        const details = await productService.getProductByFamily(body.familyCode)

        res.status(200).json({
            products: details
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: 'internal server error'
        })
    }
}