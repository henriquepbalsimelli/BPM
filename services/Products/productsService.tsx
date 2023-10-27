import { ProductIntegrationInterface, ProductIntegrationCharacteristicsInterface } from "@/src/Interfaces/integration/ProductIntegrationDataInterface"
import { ProductIntegrationService } from "./integration"
import { ProductStock } from "@/src/Interfaces/integration/ProductStockIntegrationInterface"
import { ProductDetailInterface } from '../../src/Interfaces/integration/ProductDetailInterface'
import { FamilyProductInterface, VariationsInterface } from '../../src/Interfaces/FamilyProductInterface'


export class ProductsService {
    async getProducts(): Promise<(Map<string, FamilyProductInterface>)>  {
        try{
            const productIntegrationService = new ProductIntegrationService()
            
            const productStock = await productIntegrationService.getProductStock()
    
            const productList = await productIntegrationService.getProductList()

            const productFamilyDict = new Map<string, FamilyProductInterface>()

            productStock.produtos.map((product: ProductStock) => {
                const productInfo = productList.product_service_registered.find((productList: ProductIntegrationInterface) => {
                    return productList.product_code === product.nCodProd
                })

                if(!productInfo?.family_code){
                    return null
                }

                const existingFamily = productFamilyDict.get(productInfo.family_description)

                const colorObject: any = productInfo.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Cores'
                })

                const sizeObject: any = productInfo.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Tamanho'
                })

                if (existingFamily) {
                    const variation: VariationsInterface = {
                        price: productInfo.unit_value,
                        color: colorObject?.content,
                        size: sizeObject?.content,
                        product_code: productInfo.product_code
                    } 
                    existingFamily.variations.push(variation)
                }
                else{
                    const variation: VariationsInterface = {
                        price: productInfo.unit_value,
                        color: colorObject?.content,
                        size: sizeObject?.content,
                        product_code: productInfo.product_code
                    } 
                    const familyData: FamilyProductInterface  = {
                        familyCode: productInfo.family_code,
                        familyDescription: productInfo.family_description,
                        price: productInfo.unit_value,
                        variations: [variation]
                    }
                    productFamilyDict.set(productInfo.family_description, familyData)
                }

            })
            return productFamilyDict

        }catch(error: any){
            throw new Error(error)
        }
    }

    async getProductDetail(productCode: number): Promise<ProductDetailInterface>{
        try{
            const productIntegrationService = new ProductIntegrationService()

            const productDetail: ProductDetailInterface = await productIntegrationService.getProductDetail(productCode)

            return productDetail

        }catch(error: any){
            throw new Error(error)
        }
    }

    async getProductByFamily(familyCode: string):Promise<(Map<string, FamilyProductInterface>)>{
        try{
            const productIntegrationService = new ProductIntegrationService()

            const productsByFamily: any = await productIntegrationService.getProductsByFamily(familyCode)

            const productFamilyDict = new Map<string, FamilyProductInterface>()

            productsByFamily.product_service_registered?.map((product: any) => {
                const existingFamily = productFamilyDict.get(product.family_description)

                const colorObject: any = product.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Cores'
                })

                const sizeObject: any = product.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Tamanho'
                })

                if (existingFamily) {
                    const variation: VariationsInterface = {
                        price: product.unit_value,
                        color: colorObject?.content,
                        size: sizeObject?.content,
                        product_code: product.product_code
                    } 
                    existingFamily.variations.push(variation)
                }
                else{
                    const variation: VariationsInterface = {
                        price: product.unit_value,
                        color: colorObject?.content,
                        size: sizeObject?.content,
                        product_code: product.product_code
                    } 
                    const familyData: FamilyProductInterface  = {
                        familyCode: product.family_code,
                        familyDescription: product.family_description,
                        price: product.unit_value,
                        variations: [variation]
                    }
                    productFamilyDict.set(product.family_description, familyData)
                }
            })

            return productFamilyDict

        }catch(error: any){
            throw new Error(error)
        }
    }
}
