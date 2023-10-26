import Link from '@/components/infra/Link'
import * as S from './style'
import ImageBpm from '@/components/infra/Image'

export default function ProductGalery({ products }) {
    return (
        <S.Section >
            <S.Container >
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <a >
                                    <S.ImgDiv>
                                        <ImageBpm
                                            width={700}
                                            height={475}
                                            alt="content"
                                            src="https://dummyimage.com/420x260"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                maxWidth: '100%',
                                                minWidth: '100%',
                                            }}
                                        />
                                    </S.ImgDiv>
                                </a>
                                <div >
                                    <Link href={`/shop/product/${product.productCode}`}>
                                        <h3 >{product.productDescription}</h3>
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