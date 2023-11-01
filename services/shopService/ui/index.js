import { ApiProductsService } from '../../Products/api/apiProductsService'
import { HttpClient } from '../../../components/infra/HttpClient/HttpClient'


export class ShopService {   
    async getProducts() {
        const productsService = new ApiProductsService()
        const data = await productsService.getProducts()

        return data
    }

    async getProductDetail(productCode) {
        const productsService = new ApiProductsService()

        const data = await productsService.getProductDetail(productCode)
        return data

    }

    async getProductByFamily(family) {
        const productsService = new ApiProductsService()

        const data = await productsService.getProductByFamily(family)
        
        return data
    }

    async getFamiliesApi(){
        const res = await HttpClient(
            '/api/integration/products',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }    
        )
        return res
    }

    async getFamilyDetails(familyCode){
        const res = await HttpClient(
            '/api/integration/familyDetail',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    familyCode: familyCode
                }
            }    
        )
        return res
    }
}


