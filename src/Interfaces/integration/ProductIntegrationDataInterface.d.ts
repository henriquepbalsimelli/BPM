export interface ProductIntegrationDataInterface {
    page: number
    total_per_page: number
    records: number
    total_records: number
    product_service_registered: ProductIntegrationInterface[]
}

export interface ProductIntegrationInterface {
    product_code: number
    code: string
    family_code: number
    detailed_description: string
    description: string
    family_description: string
    unit_value: number
    product_code_integration: string
    characteristics: ProductIntegrationCharacteristicsInterface[]
}

export interface ProductIntegrationCharacteristicsInterface {
    name: string
    content: string
}