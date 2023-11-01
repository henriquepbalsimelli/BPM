import { ProductStockIntegrationInterface } from '@/src/Interfaces/integration/ProductStockIntegrationInterface'
import { ProductIntegrationDataInterface, ProductIntegrationInterface, ProductIntegrationCharacteristicsInterface } from '../../../src/Interfaces/integration/ProductIntegrationDataInterface'
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

        const res = await OmieClient(
            'https://app.omie.com.br/api/v1/estoque/consulta/',
            content
        )

        const products = res.data

        if (!products) {
            throw new Error('Erro ao buscar estoque dos produtos')
        }

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
                    "filtrar_apenas_omiepdv": "N",
                    "exibir_caracteristicas": "S"
                }
            ]
        }

        const res = await OmieClient(
            'https://app.omie.com.br/api/v1/geral/produtos/',
            content
        )

        const products = res.data

        const data: ProductIntegrationDataInterface = {
            page: products.pagina,
            total_per_page: products.total_de_paginas,
            records: products.registros,
            total_records: products.total_de_registros,
            product_service_registered: products.produto_servico_cadastro?.map((product: any) => {
                const mappedProduct: ProductIntegrationInterface = {
                    product_code: product.codigo_produto,
                    code: product.codigo,
                    family_code: product.codigo_familia,
                    detailed_description: product.descr_detalhada,
                    description: product.description,
                    family_description: product.descricao_familia,
                    unit_value: product.valor_unitario,
                    product_code_integration: product.codigo_produto_integracao,
                    characteristics: product.caracteristicas?.map((caracteristica: any) => {
                        const characteristic: ProductIntegrationCharacteristicsInterface = {
                            content: caracteristica.cConteudo,
                            name: caracteristica.cNomeCaract
                        }
                        return characteristic
                    })
                }
            
                return mappedProduct 
            })
        }
        return data
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
        const res = await OmieClient(
            'https://app.omie.com.br/api/v1/geral/produtos/',
            content
        )

        const productDetail = res.data

        if (!productDetail) {
            throw new Error('Product not found')
        }

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
            characteristics: productDetail.caracteristicas.map((caracteristica: any) => {
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

    async getProductsByFamily(familyCode: string): Promise<ProductIntegrationDataInterface> {
        const content = {
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "call": "ListarProdutos",
            "param": [
                {
                    "pagina": 1,
                    "registros_por_pagina": 50,
                    "apenas_importado_api": "N",
                    "filtrar_apenas_omiepdv": "N",
                    "exibir_caracteristicas": "S",
                    "filtrar_apenas_familia": familyCode
                  }
            ]
        }
        const res = await OmieClient(
            'https://app.omie.com.br/api/v1/geral/produtos/',
            content
        )

        const productsByFamily = res.data

        if (!productsByFamily) {
            throw new Error('Não foi possível obter a lista de produtos por família')
        }

        const data: ProductIntegrationDataInterface = {
            page: productsByFamily.pagina,
            total_per_page: productsByFamily.total_de_paginas,
            records: productsByFamily.registros,
            total_records: productsByFamily.total_de_registros,
            product_service_registered: productsByFamily.produto_servico_cadastro?.map((product: any) => {
                const mappedProduct: ProductIntegrationInterface = {
                    product_code: product.codigo_produto,
                    code: product.codigo,
                    family_code: product.codigo_familia,
                    detailed_description: product.descr_detalhada,
                    description: product.descricao,
                    family_description: product.descricao_familia,
                    unit_value: product.valor_unitario,
                    product_code_integration: product.codigo_produto_integracao,
                    characteristics: product.caracteristicas?.map((caracteristica: any) => {
                        const characteristic: ProductIntegrationCharacteristicsInterface = {
                            content: caracteristica.cConteudo,
                            name: caracteristica.cNomeCaract
                        }
                        return characteristic
                    })
                }
            
                return mappedProduct 
            })
        }

        return data
    }
}
