import { initializeIcons } from '@fluentui/font-icons-mdl2';
import User from '@/components/User'
import * as S from './style'
import Configs from '@/components/PageConfigs'
import { useCollapse } from 'react-collapsed'
import { Icon } from '@fluentui/react'

initializeIcons()
export default function CollapseHeader() {
    
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    
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
                        <User />
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
        </>
    )
}