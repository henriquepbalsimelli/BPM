import  ProductDetail  from "../../../components/Shop/product/productDetail"
import Header from "@/components/infra/Header"
import { ShopService } from "../../../services/ShopService"

export const getServerSideProps = async (context) => {
    const shopService = new ShopService()
    
    let data = await shopService.getProductByFamily(context.params.familyCode)

    data = JSON.stringify(data)

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
            <ProductDetail product={data}/>
        </>
    )
}