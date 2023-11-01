import { useEffect, useMemo, useState } from "react";
import * as S from "./cart.style";
import {
    mergeStyleSets,
    ContextualMenu,
    Modal,
    IDragOptions,

} from '@fluentui/react';
import { CardCartItem } from "./cartItem/cardCartItem"
import { CartService } from "../../services/cartService/ui/cartService";
import { ICartItem } from "../../src/Interfaces/cartItem"

export default function Cart({ setCartModalState, isOpen }: any) {

    const keepInBounds = true;
    const isDraggable = true;
    const [total, setTotal] = useState(0)

    const cartService = useMemo(() => {
        return new CartService()
    }, [])

    const [cart, setCart] = useState<ICartItem[]>([])

    useEffect(() => {
        setCart(cartService.getCart())
        setTotal(cartService.getTotal())
    }, [cartService, isOpen])

    const dragOptions = useMemo(
        (): IDragOptions => ({
            moveMenuItemText: 'Move',
            closeMenuItemText: 'Close',
            menu: ContextualMenu,
            keepInBounds,
            dragHandleSelector: '.ms-Modal-scrollableContent > div:first-child',
        }),
        [keepInBounds],
    );


    return (
        <>
            <Modal
                isOpen={isOpen}
                onDismiss={() => {
                    setCartModalState(false)
                }}
                isBlocking={false}
                containerClassName={contentStyles.container}
                dragOptions={isDraggable ? dragOptions : undefined}
            >
                <S.CartHeader>
                    <S.CartItemHeaderTitleDiv>
                        <S.CartSpanBold>
                            Carrinho
                        </S.CartSpanBold>
                        <S.CloseButton>
                            <S.CloseButton
                                onClick={() => {
                                    setCartModalState(false)
                                }}
                            >X</S.CloseButton>
                        </S.CloseButton>
                        
                    </S.CartItemHeaderTitleDiv>
                    <S.CartSpan>
                        {cart.length} {cart.length > 1 ? "itens" : "item"}
                    </S.CartSpan>
                </S.CartHeader>
                <S.ModalContainer>
                    {
                        cart.map((item: ICartItem) => {
                            return (
                                <CardCartItem
                                    key={item.id}
                                    item={item}
                                    setTotal={setTotal}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            )
                        })
                    }
                </S.ModalContainer>
                <S.ButtonsDiv>
                    <S.TotalSpan>
                        Total: R$ {total}
                    </S.TotalSpan>
                    <S.ClearCartButton
                        onClick={() => {
                            cartService.clearCart()
                            setCart(cartService.getCart())
                            setTotal(cartService.getTotal())
                        }}
                    >Limpar carrinho</S.ClearCartButton>
                    <S.FinishCartButton
                        onClick={() => {
                            
                        }}
                    >Finalizar compra</S.FinishCartButton>
                </S.ButtonsDiv>

            </Modal>
        </>
    )

}

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '30vw',
        height: '100vh',
        position: 'absolute',
        right: '0',
    }
})