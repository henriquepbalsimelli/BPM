import { initializeIcons } from '@fluentui/font-icons-mdl2';
import User from '@/components/User'
import * as S from './style'
import Configs from '@/components/PageConfigs'
import { useCollapse } from 'react-collapsed'
import Cart from '../../../Cart/cart';
import { useState } from 'react';

initializeIcons()
export default function CollapseHeader() {
    
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const [cartModalState, setCartModalState] = useState(false)
    
    return (
        <>
            <S.CollapseHeaderContainer>
                <section {...getCollapseProps()}>
                    <ul>
                        <S.NLink href='/'>
                            <S.Li>Home</S.Li>
                        </S.NLink>
                        <S.NLink href='/shop'>
                            <S.Li>Loja</S.Li>
                        </S.NLink>
                        <S.NLink href='/stickeralbum'>
                            <S.Li>Álbum de Stickers</S.Li>
                        </S.NLink>
                        <S.NLink href='/artgallery'>
                            <S.Li>Galeria de arte</S.Li>
                        </S.NLink>
                        <S.NLink href='/videosanimations'>
                            <S.Li>Vídeos e Animações</S.Li>
                        </S.NLink>
                        <User 
                            setCartModalState={setCartModalState}
                        />
                        <Configs />
                    </ul>
                </section>
                <S.MenuButton
                    {...getToggleProps()}
                    iconName="AlertSolid"
                >
                    {
                        isExpanded
                            ? <S.MenuIcon iconName="CalculatorSubtract" />
                            : <S.MenuIcon iconName='AlignJustify' />}
                </S.MenuButton>
            </S.CollapseHeaderContainer>
            <Cart
                isOpen={cartModalState}
                setCartModalState={setCartModalState}
            />
        </>
    )
}