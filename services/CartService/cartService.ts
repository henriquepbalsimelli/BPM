import { CartItem } from './cartItem';


export const CartService = {
    addItemToCart(item: CartItem) {
        console.log('Adding item to cart', item)
        // const cart = JSON.parse(localStorage.getItem('cart')) || []
        // cart.push(item)
        // localStorage.setItem('cart', JSON.stringify(cart))
    }
}