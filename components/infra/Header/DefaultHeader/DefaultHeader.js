import Configs from '@/components/PageConfigs'
import * as S from './style'
import Logo from '../../Logo'
import User from '@/components/User'

const LOGO_IMAGE_URL = '/images/bpm_logo.svg'
export default function DefaultHeader() {
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
                    <User />
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