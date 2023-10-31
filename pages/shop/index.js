import Head from '@/components/infra/Head'
import Header from '@/components/infra/Header'
import ProductGalery from '../../components/Shop/productGalery/productGalery'

export default function Shop() {

    return (
        <>

            <Head
                title="The BPM - Loja"
            />
            <Header />
            <ProductGalery/>
        </>
    )
}