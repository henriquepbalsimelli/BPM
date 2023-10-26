import { IDropdownOption } from "@fluentui/react"


export interface ProductInterface {
    productCode: number
    productDescription: string
    price: number | undefined
    balance: number
    selectedSize: string | null = null
    selectedColor: string | null = null
    colors: string[] | null = null
    productDetailedDescription: string | undefined = null 
    color: string | null = null
    sizes:  IDropdownOption<any>[]
    family: number | undefined = null
    size: string | null = null
    codigo_produto_integracao: string | undefined = null
}
