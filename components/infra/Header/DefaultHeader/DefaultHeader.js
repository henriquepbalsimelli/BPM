import Configs from '@/components/PageConfigs'
import * as S from './style'
import Logo from '../../Logo'
import User from '../../../User'
import Cart from '../../../Cart/cart'
import { useState } from 'react'

const LOGO_IMAGE_URL = '/images/bpm_logo.svg'
export default function DefaultHeader() {

    const [cartModalState, setCartModalState] = useState(false)

    return (
        <>
            <S.FlexContainer>
                <S.FlexSubContainer>
                    <S.EmptyContainer/>
                    <S.ImgContainer>
                        <Logo
                            src={LOGO_IMAGE_URL}
                            alt="Logo"
                            priority={true}
                            fill
                        />
                    </S.ImgContainer>
                    <User 
                        setCartModalState={setCartModalState}
                    />
                </S.FlexSubContainer>
                <S.FlexSubContainer2>
                    <S.NLink href='/'>
                        Home
                    </S.NLink>
                    <S.NLink href='/shop'>
                        Loja
                    </S.NLink>
                    <S.NLink href='/stickeralbum'>
                        Album de Stickers
                    </S.NLink>
                    <S.NLink href='/artgallery'>
                        Galeria de arte
                    </S.NLink>
                    <S.NLink href='/videosanimations'>
                        Vídeos e Animações
                    </S.NLink>
                </S.FlexSubContainer2>
            </S.FlexContainer>
            <Cart
                isOpen={cartModalState}
                setCartModalState={setCartModalState}
            />
        </>
    )
}