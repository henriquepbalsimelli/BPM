import * as S from './style'
import ImageBpm from '@/components/infra/Image'
import { useRouter } from 'next/router'
import  Link  from '../../../components/infra/Link'

export default function ProductGalery({ products }) {

    const router = useRouter()
    const handleSelectProduct = (product) => {
        router.push(`/shop/product/${product.familyCode}`)
    }
    

    return (
        <S.Section >
            <S.Container >
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <a >
                                    <S.ImgDiv
                                        onClick={() => {
                                            handleSelectProduct(product)

                                        }}
                                    >
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
                                    <Link href={`/shop/product/${product.familyCode}`}>
                                        <h3 >{product.familyDescription}</h3>
                                    </Link>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </S.Container>
        </S.Section>
    )
}