import Head from '@/components/infra/Head'
import Header from '@/components/infra/Header'
import { ShopService } from '@/services/ShopService/ShopService'
import ProductGalery from '../../components/Shop/productGalery/productGalery'

export const getServerSideProps = async () => {
    const shopService = new ShopService()
    const data = await shopService.getProducts()

    const valuesA = []

    data.forEach((value) => {
        valuesA.push(value)
    })

    const products = valuesA

    return {
        props: {
            products
        }
    }

}


export default function Shop({ products }) {

    return (
        <>

            <Head
                title="The BPM - Loja"
            />
            <Header />
            <ProductGalery products={products} />
        </>
    )
}