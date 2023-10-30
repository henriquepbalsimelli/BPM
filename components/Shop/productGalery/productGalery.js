import * as S from './style'
import ImageBpm from '@/components/infra/Image'
import { useRouter } from 'next/router'
import Link from '../../../components/infra/Link'
import { ShopService } from '../../../services/ShopService'
import { useEffect, useState } from 'react'

export default function ProductGalery() {

    const router = useRouter()
    const handleSelectProduct = (product) => {
        router.push(`/shop/product/${product.familyCode}`)
    }

    const [families, setFamilies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function getFamilies() {
        setLoading(true)
        const shopService = new ShopService()
        const data = await shopService.getFamiliesApi()

        const valuesA = []

        data.body.products.forEach((value) => {
            valuesA.push(value)
        })

        const families = valuesA

        return families
    }

    useEffect(() => {
        getFamilies().then((families) => {
            setFamilies(families)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setError(err.message)
        })
    }, [])


    return (
        <>
        {
                loading ? <h1>Carregando...</h1> : <S.Section >
                    <S.Container >
                        {
                            error ? <h1>{error}</h1> : null
                        }
                        {
                            families.map((product) => {
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
        }
            
        </>
    )
}