import Logo from '../Logo'
import Configs from '../../PageConfigs'
import User from '../../User'
import * as S from './style'
import { useEffect, useState } from 'react'
import { getCurrentDimension } from '@/assets/style/GlobalStyle/GlobalStyle'

const LOGO_IMAGE_URL = '/images/bpm_logo.svg'
import { useCollapse } from 'react-collapsed'


export default function Header() {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    const [widowSize, setWindowSize] = useState()

    useEffect(() => {
        const size = getCurrentDimension()
        setWindowSize(size)
        console.log(size)
    }, [])

    return (
        <>
            <S.FlexContainer>
                {
                    widowSize?.width < 768 ? (
                        <div>
                            <button {...getToggleProps()}>
                                {isExpanded ? 'Collapse' : 'Expand'}
                            </button>
                            <section {...getCollapseProps()}>
                                <ul>
                                    <S.NLink href='/'>
                                        <li>Home</li>
                                    </S.NLink>
                                    <S.NLink href='/shop'>
                                        <li>Loja</li>
                                    </S.NLink>
                                    <S.NLink href='/stickeralbum'>
                                        <li>Álbum de Stickers</li>
                                    </S.NLink>
                                    <S.NLink href='/artgallery'>
                                        <li>Galeria de arte</li>
                                    </S.NLink>
                                    <S.NLink href='/videosanimations'>
                                        <li>Vídeos e Animações</li>
                                    </S.NLink>
                                    <User />
                                    <Configs />
                                </ul>
                            </section>
                        </div>
                    ) : (
                        <>
                            <S.FlexSubContainer>
                                <User />
                                <S.ImgContainer>
                                    <Logo
                                        src={LOGO_IMAGE_URL}
                                        alt="Logo"
                                        priority={true}
                                        fill
                                    />
                                </S.ImgContainer>
                                <Configs />

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
                        </>
                    )
                }
            </S.FlexContainer>

        </>
    )
}