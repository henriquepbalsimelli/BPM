

export interface ICartItem {
    product_code: number
    name: string
    price: number
    quantity: number
    size: string
    color: string
    availableQty: number
}

export interface ICreateOrderItemPayload {
    productCode: number
    quantity: number
}

export interface ICreateOrderPayload {
    userId: number
    items: ICreateOrderItemPayload[]
}