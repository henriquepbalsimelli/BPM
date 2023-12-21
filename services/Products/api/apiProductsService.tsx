import { ProductIntegrationInterface, ProductIntegrationCharacteristicsInterface } from "@/src/Interfaces/integration/ProductIntegrationDataInterface"
import { ProductIntegrationService } from "../integration/integrationProductsService"
import { ProductStock } from "@/src/Interfaces/integration/ProductStockIntegrationInterface"
import { ProductDetailInterface } from '../../../src/Interfaces/integration/ProductDetailInterface'
import { FamilyProductInterface, VariationsInterface } from '../../../src/Interfaces/FamilyProductInterface'


export class ApiProductsService {
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
                        product_code: productInfo.product_code,
                        available_qty: product.nSaldo
                    } 
                    existingFamily.variations.push(variation)
                }
                else{
                    const variation: VariationsInterface = {
                        price: productInfo.unit_value,
                        color: colorObject?.content,
                        size: sizeObject?.content,
                        product_code: productInfo.product_code,
                        available_qty: product.nSaldo
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

    async getProductByFamily(familyCode: string): Promise<FamilyProductInterface>{
        try{
            const productIntegrationService = new ProductIntegrationService()

            const productsByFamily: any = await productIntegrationService.getProductsByFamily(familyCode)

            const productStock = await productIntegrationService.getProductStock()

            const productFamilyDict: FamilyProductInterface = {
                familyCode: familyCode,
                familyDescription: null,
                price: null,
                variations: []
            }

            productsByFamily.product_service_registered?.map((product: any) => {
                const productStockInfo = productStock.produtos.find((productStock: ProductStock) => {
                    return productStock.nCodProd === product.product_code
                })
                if (!productStockInfo) {
                    return null
                }

                if (!productFamilyDict.familyDescription) {
                    productFamilyDict['familyDescription'] = product.family_description
                    productFamilyDict['price'] = product.unit_value
                }

                const colorObject: any = product.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Cores'
                })

                const sizeObject: any = product.characteristics?.find((characteristic: ProductIntegrationCharacteristicsInterface) => {
                    return characteristic.name === 'Tamanho'
                })

                const variation: VariationsInterface = {
                    price: product.unit_value,
                    color: colorObject?.content,
                    size: sizeObject?.content,
                    product_code: product.product_code,
                    available_qty: productStockInfo.nSaldo
                }
                if (variation.available_qty != 0) {
                    productFamilyDict.variations.push(variation)
                }
                
            })

            return productFamilyDict

        }catch(error: any){
            throw new Error(error)
        }
    }
}
