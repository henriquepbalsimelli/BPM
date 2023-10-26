export interface ProductIntegrationDataInterface {
    pagina: number
    total_de_paginas: number
    registros: number
    total_de_registros: number
    produto_servico_cadastro: ProductIntegrationInterface[]
}

export interface ProductIntegrationInterface {
    codigo_produto: number
    codigo: string
    codigo_familia: number
    descr_detalhada: string
    descricao: string
    descricao_familia: string
    valor_unitario: number
    codigo_produto_integracao: string
}