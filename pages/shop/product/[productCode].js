import  ProductDetail  from "../../../components/Shop/product/productDetail"
import Header from "@/components/infra/Header"
import { ShopService } from "../../../services/ShopService/ShopService"

export const getServerSideProps = async (context) => {
    const shopService = new ShopService()
    const data = await shopService.getProductDetail(context.params.productCode)
    
    return {
        props: {
            data
        }
    }
}


export default function Product({ data }) {
    return (
        <>
            <Header/>
            <ProductDetail product={data}/>
        </>
    )
}