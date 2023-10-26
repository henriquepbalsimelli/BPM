import { ProductsService } from "../../../../services/Products/productsService"

export default async function handler(req: any, res: any) {

    const productService = new ProductsService()

    const products = await productService.getProducts()

    const valuesA: any = []

    products.forEach((value)=>{
        valuesA.push(value)
    })
  
    res.status(200).json({
        name: 'John Doe',
        products: valuesA
    })
  
}