import Logo from '../Logo'
import Configs from '../../PageConfigs'
import User from '../../User'
import * as S from './style'
import { useEffect, useState } from 'react'
import { getCurrentDimension } from '@/assets/style/GlobalStyle/GlobalStyle'

const LOGO_IMAGE_URL = '/images/bpm_logo.svg'


export default function Header () {
    
    const [widowSize, setWindowSize] = useState()

    useEffect(() => {
        const size = getCurrentDimension()
        setWindowSize(size)
        console.log(size)
    }, [])

    return (
        <>
            {
                widowSize?.width < 768 ? (<div></div>) : (<div>oi</div>)
            }
            <S.FlexContainer>
                <S.FlexSubContainer>
                    <User/>
                    <S.ImgContainer>
                        <Logo
                            width={120}
                            height={70}
                            src={LOGO_IMAGE_URL}
                            alt="Logo"
                            priority={true}
                            />
                    </S.ImgContainer>
                    <Configs/>
                    
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
        </>
    )
}