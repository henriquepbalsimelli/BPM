import * as S from './cardCartItem.style'
import { CartItem } from '../../../src/Interfaces/cartItem'
import { CartService } from '@/services/CartService/cartService'
import { Dispatch, SetStateAction, useState } from 'react'


export function CardCartItem({ item, key, setTotal }: { item: CartItem, key: number, setTotal: Dispatch<SetStateAction<number>> }){
    
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
                                    cartService.decreaseQuantity(item)
                                    if (quantity > 1){
                                        setQuantity(quantity - 1)
                                        setTotal(cartService.getTotal())
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