
export interface ProductDetailInterface {
    detailed_description: string
    product_code: number
    code: string
    unit: string
    description: string
    family_code: number
    images: string[]
    family_desciption: string
    unit_value: number
    characteristics: ProductCharacteristicsInterface[]
}

export interface ProductCharacteristicsInterface {
    content: string
    show_in_invoice: string
    show_order_item: string
    characteristics_name: string
    characteristic_code: number
}