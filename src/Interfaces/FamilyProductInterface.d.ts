export interface FamilyProductInterface {
    familyCode: string | number
    familyDescription: string | null
    price: number | null
    variations: VariationsInterface[]
}

export interface VariationsInterface {
    price: number
    color: string | null
    size: string | null
    product_code: number
    available_qty: number
}