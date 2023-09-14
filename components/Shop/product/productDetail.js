import { getProductDetail } from '@/services/shopService/shopService';
import * as S from './style'
import ImageBpm from '@/components/infra/Image';


export default function ProductDetail({ product }) {
    return (
        <>
            <S.Main>
                <S.Section>
                    <S.Container>
                        <S.ImgContainer>
                            <ImageBpm
                                width={700}
                                height={475}
                                alt="content"
                                src="https://dummyimage.com/600x600"
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </S.ImgContainer>
                        <S.ProductInfoContainer>
                            <S.ProductName>{product.name}</S.ProductName>
                            <S.Description>Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</S.Description>
                            <S.ConfigContainer >
                                <S.ColorSpan>Color</S.ColorSpan>
                                <div>
                                    <S.ColorButton style={{ backgroundColor: '#fdd938' }} ></S.ColorButton>
                                    <S.ColorButton style={{ backgroundColor: '#c1795f' }}></S.ColorButton>
                                    <S.ColorButton style={{ backgroundColor: '#5883b4' }}></S.ColorButton>
                                </div>
                            </S.ConfigContainer>
                            <S.SizeOptions >
                                <S.SizeSpan>Size</S.SizeSpan>
                                <S.SizeSelectOptions >
                                    <S.SizeOption>SM</S.SizeOption>
                                    <S.SizeOption>M</S.SizeOption>
                                    <S.SizeOption>L</S.SizeOption>
                                    <S.SizeOption>XL</S.SizeOption>
                                </S.SizeSelectOptions>
                            </S.SizeOptions>
                        </S.ProductInfoContainer>
                    </S.Container>
                </S.Section>
            </S.Main>
        </>
        // <S.Main>
        //     <S.Section>
        //         <S.Container>
        //             <S.SubContainer >
        //                 <S.ImgContainer>
        //                     <S.Img alt="ecommerce" src="https://dummyimage.com/400x400" />
        //                 </S.ImgContainer>
        //                 <S.ProductInfoContainer >
        //                     <S.ProductName >{product.name}</S.ProductName>
        //                     <S.Description>Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</S.Description>
        //                     <S.ConfigContainer >
        //                         <S.ColorSpan>Color</S.ColorSpan>
        //                         <div>
        //                             <S.ColorButton style={{ backgroundColor: '#fdd938' }} ></S.ColorButton>
        //                             <S.ColorButton style={{ backgroundColor: '#c1795f' }}></S.ColorButton>
        //                             <S.ColorButton style={{ backgroundColor: '#5883b4' }}></S.ColorButton>
        //                         </div>
        //                     </S.ConfigContainer>
        //                     <S.SizeOptions >
        //                         <S.SizeSpan>Size</S.SizeSpan>
        //                         <S.SizeSelectOptions >
        //                             <S.SizeOption>SM</S.SizeOption>
        //                             <S.SizeOption>M</S.SizeOption>
        //                             <S.SizeOption>L</S.SizeOption>
        //                             <S.SizeOption>XL</S.SizeOption>
        //                         </S.SizeSelectOptions>
        //                     </S.SizeOptions>
        //                     <S.QuantityContainer>
        //                         <S.QuantitySpan>Quantity</S.QuantitySpan>
        //                         <S.QuantitySpan >4</S.QuantitySpan>
        //                     </S.QuantityContainer>
        //                     <S.CostContainer>
        //                         <S.CostSpan>$58.00</S.CostSpan>
        //                         <S.SubDivButtons>
        //                             <S.BuyNowButton>Buy now</S.BuyNowButton>
        //                             <S.AddToCartButton>
        //                                 Add to cart
        //                             </S.AddToCartButton>
        //                         </S.SubDivButtons>
        //                     </S.CostContainer>
        //                 </S.ProductInfoContainer>
        //             </S.SubContainer>
        //         </S.Container>
        //     </S.Section>
        // </S.Main>
    )
}