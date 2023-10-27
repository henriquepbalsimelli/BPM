import { ProductsService } from "../../../../services/Products/productsService"

export default async function handler(req: any, res: any) {

    const productService = new ProductsService()

    const products = await productService.getProductByFamily('4806871524')

    const valuesA: any = []

    products.forEach((value: any)=>{
        valuesA.push(value)
    })
  
    res.status(200).json({
        name: 'John Doe',
        products: valuesA
    })
  
}