import Head from '@/components/infra/Head'
import Header from '@/components/infra/Header'
import { ShopService } from '@/services/shopService/shopService'
import ProductGalery from '@/components/Shop/productGalery/productGalery'

export const getServerSideProps = async () => {
    const data = await ShopService.getProducts()

    const products = data.data

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
            <ProductGalery products={products}/>
            
        </>
    )
}