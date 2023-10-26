export interface ProductStockIntegrationInterface {
    nPagina: number
    nTotPaginas: number
    nRegistros: number
    nTotRegistros: number
    dDataPosicao: date
    produtos: ProductStock[]
}

export interface ProductStock {
    cCodInt: string
    cCodigo: string
    cDescricao: string
    codigo_local_estoque: number
    estoque_minimo: number
    fisico: number
    nCMC: number
    nCodProd: number
    nPendente: number
    nPrecoUnitario: number
    nSaldo: number
    reservado: number
}
