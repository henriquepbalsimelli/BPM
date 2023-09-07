import Logo from '../Logo'
import Configs from '../../PageConfigs'
import User from '../../User'
import * as S from './style'

const LOGO_IMAGE_URL = '/images/bpm_logo.svg'

export default function Header () {
    return (
        <>
            <S.FlexContainer>
                <S.FlexSubContainer>
                    <User/>
                    <Logo
                        width={120}
                        height={70}
                        src={LOGO_IMAGE_URL}
                        alt="Logo"
                        priority={true}
                    />
                    <Configs/>
                    
                </S.FlexSubContainer>

                <S.FlexSubContainer2>
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