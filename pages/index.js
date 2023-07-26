import * as S from './style'
import Link from "next/link"

export default function Home() {

    return (
        <>
            <S.flexContainer>
                <Link href='/shop'>
                        Loja
                </Link>
                <Link href='/shop'>
                        Album de Stickers
                </Link>
                <Link href='/artgallery'>
                        Galeria de arte
                </Link>
                <Link href='/videosanimations'>
                        Vídeos e Animações
                </Link>
            </S.flexContainer>

        </>
    )
}