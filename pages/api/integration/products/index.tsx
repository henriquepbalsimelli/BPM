import { FamilyProductInterface } from "@/src/Interfaces/FamilyProductInterface"
import { ApiProductsService } from "../../../../services/Products/api/apiProductsService"

export default async function handler(req: any, res: any) {
    try {

        const productService = new ApiProductsService()

        const products = await productService.getProducts()

        const values: any = []

        products.forEach((value: FamilyProductInterface) => {
            values.push(value)
        })

        res.status(200).json({
            products: values
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: 'internal server error'
        })
    }
}