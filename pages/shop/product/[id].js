import  ProductDetail  from "@/components/Shop/product/productDetail"
import Header from "@/components/infra/Header"
import { getProductDetail } from "@/services/shopService/shopService"

export const getServerSideProps = async (context) => {

    const data = await getProductDetail(context.params.id)
    const product = data.product
    return {
        props: {
            product
        }
    }
}


export default function Product({ product }) {
    return (
        <>
            <Header/>
            <ProductDetail product={product}/>
        </>
    )
}