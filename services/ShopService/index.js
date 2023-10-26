import { ProductsService } from '../Products/productsService'


export class ShopService {   
    async getProducts() {
        const productsService = new ProductsService()
        const data = await productsService.getProducts()

        return data
    }

    async getProductDetail(productCode) {
        const productsService = new ProductsService()

        const data = await productsService.getProductDetail(productCode)
        return data

    }

    async getProductByFamily(family) {
        const productsService = new ProductsService()

        const data = await productsService.getProductByFamily(family)
        
        return data
    }
}


