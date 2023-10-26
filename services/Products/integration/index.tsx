import { ProductStockIntegrationInterface } from '@/src/Interfaces/integration/ProductStockIntegrationInterface'
import { ProductIntegrationDataInterface } from '../../../src/Interfaces/integration/ProductIntegrationDataInterface'
import { ProductDetailInterface, ProductCharacteristicsInterface } from '../../../src/Interfaces/integration/ProductDetailInterface'
import { OmieClient } from '../../../components/infra/OmieClient/index'

const OMIE_APP_KEY = process.env.OMIE_APP_KEY
const OMIE_APP_SECRET = process.env.OMIE_APP_SECRET

export class ProductIntegrationService {
    async getProductStock(): Promise<ProductStockIntegrationInterface> {
        const content = {
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "call": "ListarPosEstoque",
            "param": [
                {
                    "nPagina": 1,
                    "nRegPorPagina": 50,
                    "dDataPosicao": "24/10/2023",
                    "cExibeTodos": "N",
                    "codigo_local_estoque": 0
                }
            ]
        }

        const products = await OmieClient(
            'https://app.omie.com.br/api/v1/estoque/consulta/',
            content
        )

        const data: ProductStockIntegrationInterface = {
            nPagina: products.nPagina,
            nTotPaginas: products.nTotPaginas,
            nRegistros: products.nRegistros,
            nTotRegistros: products.nTotRegistros,
            dDataPosicao: products.dDataPosicao,
            produtos: products.produtos
        }

        return data
    }

    async getProductList(): Promise<ProductIntegrationDataInterface> {
        const content = {
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "call": "ListarProdutos",
            "param": [
                {
                    "pagina": 1,
                    "registros_por_pagina": 50,
                    "apenas_importado_api": "N",
                    "filtrar_apenas_omiepdv": "N"
                }
            ]
        }

        const products = await OmieClient(
            'https://app.omie.com.br/api/v1/geral/produtos/',
            content
        )

        return products
    }


    async getProductDetail(productCode: number): Promise<ProductDetailInterface> {
        const content = {
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "call": "ConsultarProduto",
            "param": [
                {
                    "codigo_produto": productCode,
                    "codigo_produto_integracao": "",
                    "codigo": ""
                }
            ]
        }
        const productDetail = await OmieClient(
            'https://app.omie.com.br/api/v1/geral/produtos/',
            content
        )

        const data: ProductDetailInterface = {
            detailed_description: productDetail.descr_detalhada,
            product_code: productDetail.codigo_produto,
            code: productDetail.codigo,
            unit: productDetail.unidade,
            description: productDetail.descricao,
            family_code: productDetail.codigo_familia,
            images: productDetail.imagens,
            family_desciption: productDetail.descricao_familia,
            unit_value: productDetail.valor_unitario,
            characteristics: productDetail.caracteristicas.map((caracteristica: any)=>{
                const characteristic: ProductCharacteristicsInterface = {
                    content: caracteristica.cConteudo,
                    show_in_invoice: caracteristica.cExibirItemNF,
                    show_order_item: caracteristica.cExibirItemPedido,
                    characteristics_name: caracteristica.cNomeCaract,
                    characteristic_code: caracteristica.nCodCaract
                }
                return characteristic
            })
        } 

        return data
    }
}
