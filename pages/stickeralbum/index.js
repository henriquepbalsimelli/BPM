import Header from '@/components/infra/Header'
import Link from '../../components/infra/Link'
import Head from '@/components/infra/Head'

export default function StickerAlbum() {
    return(
        <>
            <Head
                title="The BPM - Álbum de figurinhas"
            />
            <Header />
            <h1>Album de stickers</h1>
            <Link href="/">
                Return Home
            </Link>
        </>
    )
}