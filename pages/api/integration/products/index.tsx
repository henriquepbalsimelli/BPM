import { FamilyProductInterface } from "@/src/Interfaces/FamilyProductInterface"
import { ProductsService } from "../../../../services/Products/productsService"

export default async function handler(req: any, res: any) {
    try {

        const productService = new ProductsService()

        const products = await productService.getProducts()

        const values: any = []

        products.forEach((value: FamilyProductInterface) => {
            values.push(value)
        })

        res.status(200).json({
            products: values
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'internal server error'
        })
    }
}