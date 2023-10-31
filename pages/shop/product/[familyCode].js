import  ProductDetail  from "../../../components/Shop/product/productDetail"
import Header from "@/components/infra/Header"
import { ShopService } from "../../../services/ShopService"

export const getServerSideProps = async (context) => {
    const data = context.params.familyCode
    return {
        props: {
            data
        }
    }
}


export default function Product({ data } = null) {
    return (
        <>
            <Header/>
            <ProductDetail familyCode={data}/>
        </>
    )
}