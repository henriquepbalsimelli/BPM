import Head from '@/components/infra/Head'
import Link from '../../components/infra/Link'
import Header from '@/components/infra/Header'

function ArtGallery(){
    return (
        <>
            <Head
                title="The BPM - Galeria de arte"
            />
            <Header />
            <h1>Galeria de arte</h1>
            <Link href="/">
                Return Home
            </Link>
        </>
    )

}

export default ArtGallery