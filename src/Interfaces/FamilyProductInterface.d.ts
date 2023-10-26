export interface FamilyProductInterface {
    familyCode: number
    familyDescription: string
    price: number
    variations: VariationsInterface[]
}

export interface VariationsInterface {
    price: number
    color: string | null
    size: string | null
}