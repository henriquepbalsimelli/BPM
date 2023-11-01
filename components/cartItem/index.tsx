import * as S from './cardCartItem.style'
import { ICartItem } from '../../src/Interfaces/cartItem'
import { CartService } from '../../services/cartService/ui/cartService'
import { Dispatch, SetStateAction, useState } from 'react'
import React from 'react'


export default function CardCartItem({ item, key, setTotal, cart, setCart }: { item: ICartItem, key: number, setTotal: Dispatch<SetStateAction<number>>, cart: ICartItem[], setCart: Dispatch<SetStateAction<ICartItem[]>> }){
    
    const [quantity, setQuantity] = useState(item.quantity)
    
    return (
        <>
            <S.Card>
                <S.ImgDiv>
                    
                </S.ImgDiv>
                <S.ItemDataDiv>
                    <S.ItemDescription>
                        {item.name}
                    </S.ItemDescription>
                    <S.ItemDetail>
                        {item.size} / <S.Color style={{backgroundColor: item.color}}/>  
                    </S.ItemDetail>
                    <S.QuantityDiv>
                        <S.QuantityInputDiv>
                            <S.MinusIcon iconName="CalculatorSubtract" 
                                onClick={() => {
                                    const cartService = new CartService()
                                    if (quantity > 1){
                                        cartService.decreaseQuantity(item)
                                        setQuantity(quantity - 1)
                                        setTotal(cartService.getTotal())
                                    }
                                    if (quantity === 1){
                                        cartService.removeItem(item)
                                        setTotal(cartService.getTotal())
                                        setCart(cartService.getCart())
                                    }
                                }}
                            />
                            <S.QuantityInput
                                title="name"
                                type="text"
                                value={quantity}
                                readOnly={true}
                            />
                            <S.PlusIcon iconName="CalculatorAddition" 
                                onClick={() => {
                                    const cartService = new CartService()
                                    cartService.increaseQuantity(item)
                                    setQuantity(quantity + 1)
                                    setTotal(cartService.getTotal())
                                }}
                            />
                        </S.QuantityInputDiv>
                        <S.PriceDiv>
                            R$ {item.price}
                        </S.PriceDiv>
                    </S.QuantityDiv>
                </S.ItemDataDiv>
            </S.Card>
        </>
    )
} 