import { CartItem } from '../../src/Interfaces/cartItem';


export class CartService {
    getCart() {
        let cart: CartItem[] = []
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem('key')
            cart = JSON.parse(localStorage?.getItem('cart') || '[]')
        }
        return cart
    }

    addItemToCart(item: CartItem) {
        const cart: CartItem[] = this.getCart()

        let exists = false
        
        cart.find((cartItem: CartItem) => {
            if (cartItem.id == item.id && 
                cartItem.name == item.name && 
                cartItem.color == item.color && 
                cartItem.size == item.size) {
                exists = true
            }
        })

        if (!exists){
            cart.push(item)
        }

        localStorage.setItem('cart', JSON.stringify(cart))

    }

    clearCart() {
        localStorage.removeItem('cart')
    }

    getTotal(){
        const cart: CartItem[] = this.getCart()
        let total = 0
        cart.forEach((item: CartItem) => {
            total += item.price * item.quantity
        })
        return total
    }

    increaseQuantity(item: CartItem){
        const cart: CartItem[] = this.getCart()
        cart.find((cartItem: CartItem) => {
            if (cartItem.id == item.id && 
                cartItem.color == item.color && 
                cartItem.size == item.size) {
                cartItem.quantity += 1
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    decreaseQuantity(item: CartItem){
        const cart: CartItem[] = this.getCart()
        cart.find((cartItem: CartItem) => {
            if (cartItem.id == item.id && 
                cartItem.color == item.color && 
                cartItem.size == item.size) {
                    if (cartItem.quantity > 1){
                        cartItem.quantity -= 1
                    }
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    removeItem(item: CartItem){
        const cart: CartItem[] = this.getCart()
        cart.find((cartItem: CartItem) => {
            if (cartItem.id == item.id && 
                cartItem.color == item.color && 
                cartItem.size == item.size) {
                    cart.splice(cart.indexOf(cartItem), 1)
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

}