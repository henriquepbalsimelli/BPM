import { HttpClient } from '@/components/infra/HttpClient/HttpClient';
import { ICartItem, ICreateOrderPayload } from '../../../src/Interfaces/cartItem';


export class CartService {
    getCart() {
        let cart: ICartItem[] = []
        if (typeof window !== 'undefined') {
            const item = localStorage.getItem('key')
            cart = JSON.parse(localStorage?.getItem('cart') || '[]')
        }
        return cart
    }

    addItemToCart(item: ICartItem) {
        const cart: ICartItem[] = this.getCart()

        let exists = false
        
        cart.find((cartItem: ICartItem) => {
            if (cartItem.name == item.name && 
                cartItem.color == item.color && 
                cartItem.size == item.size) {
                exists = true
            }
        })

        if (!exists){
            item.quantity = 1
            cart.push(item)
        }

        localStorage.setItem('cart', JSON.stringify(cart))

    }

    clearCart() {
        localStorage.removeItem('cart')
    }

    getTotal(){
        const cart: ICartItem[] = this.getCart()
        let total = 0
        cart.forEach((item: ICartItem) => {
            total += item.price * item.quantity
        })
        return total
    }

    increaseQuantity(item: ICartItem){
        const cart: ICartItem[] = this.getCart()
        cart.find((cartItem: ICartItem) => {
            if (cartItem.color == item.color && 
                cartItem.size == item.size) {
                cartItem.quantity += 1
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    decreaseQuantity(item: ICartItem){
        const cart: ICartItem[] = this.getCart()
        cart.find((cartItem: ICartItem) => {
            if (cartItem.color == item.color && 
                cartItem.size == item.size) {
                    if (cartItem.quantity > 1){
                        cartItem.quantity -= 1
                    }
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    removeItem(item: ICartItem){
        const cart: ICartItem[] = this.getCart()
        cart.find((cartItem: ICartItem) => {
            if (cartItem.product_code == item.product_code) {
                cart.splice(cart.indexOf(cartItem), 1)
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    async createOrder(payload: ICreateOrderPayload) {
        const res = await HttpClient(
            '/api/orders',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload
            }
        )
        return res
    }

}