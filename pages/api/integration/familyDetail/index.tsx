import { ProductsService } from "../../../../services/Products/productsService"

export default async function handler(req: any, res: any) {
    try {

        const productService = new ProductsService()

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