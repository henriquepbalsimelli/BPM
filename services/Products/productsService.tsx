import { ProductIntegrationInterface } from "@/src/Interfaces/integration/ProductIntegrationDataInterface"
import { ProductIntegrationService } from "./integration"
import { ProductStock } from "@/src/Interfaces/integration/ProductStockIntegrationInterface"
import { ProductInterface } from "@/src/Interfaces/ProductInterface"
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
                const productInfo = productList.produto_servico_cadastro.find((productList: ProductIntegrationInterface) => {
                    return productList.codigo_produto === product.nCodProd
                })

                if(!productInfo?.codigo_familia){
                    return null
                }

                const existingFamily = productFamilyDict.get(productInfo.descricao_familia)

                if (existingFamily) {
                    const variation: VariationsInterface = {
                        price: productInfo.valor_unitario,
                        color: null,
                        size: null
                    } 
                    existingFamily.variations.push(variation)
                }
                else{
                    const variation: VariationsInterface = {
                        price: productInfo.valor_unitario,
                        color: null,
                        size: null
                    } 
                    const familyData: FamilyProductInterface  = {
                        familyCode: productInfo.codigo_familia,
                        familyDescription: productInfo.descricao_familia,
                        price: productInfo.valor_unitario,
                        variations: [variation]
                    }
                    productFamilyDict.set(productInfo.descricao_familia, familyData)
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
}
