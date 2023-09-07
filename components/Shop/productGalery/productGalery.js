import Link from '@/components/infra/Link'
import * as S from './style'

export default function ProductGalery({products}){
    return (
        <S.Section >
            <S.Container >
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <a >
                                    <img alt="ecommerce" src="https://dummyimage.com/420x260" />
                                </a>
                                <div >
                                    <h3>{product.category}</h3>
                                    <Link href={`/shop/product/${product.id}`}>
                                        <h2 >{product.title}</h2>
                                    </Link>
                                    <p >${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </S.Container>
        </S.Section>
    )
}