import React from 'react'
import { CartService } from '../../../services/CartService/cartService';
import * as S from './productDetail.style'
import ImageBpm from '../../infra/Image';
import {ProductInterface} from '../../../src/Interfaces/ProductInterface';


export default function ProductDetail(data: {product: ProductInterface }) {

    const handleAddCartItem = (product: any) => {
        CartService.addItemToCart(product)
    }
    
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
                            <S.ProductName>{data.product.name}</S.ProductName>
                            <S.ProductDesccriptionContainer>
                                <S.Description>{data.product.description}</S.Description>
                            </S.ProductDesccriptionContainer>
                            <S.ConfigContainer >
                                <S.ColorSpan>Color</S.ColorSpan>
                                <div>
                                    {
                                        data.product.colors.map((color, index) => {
                                            return (
                                                <S.ColorButton key={index} style={{ backgroundColor: color }}></S.ColorButton>
                                            )
                                        })
                                    }
                                </div>
                            </S.ConfigContainer>
                            <S.SizeOptions >
                                <S.SizeSpan>Size</S.SizeSpan>
                                <S.SizeSelectOptions>
                                    {
                                        data.product.sizes.map((size, index) => {
                                            return (
                                                <S.SizeOption key={index} value={size}>{size}</S.SizeOption>
                                            )
                                        })
                                    }
                                </S.SizeSelectOptions>
                            </S.SizeOptions>
                            <S.QuantityContainer>
                                <S.QuantitySpan>Quantity</S.QuantitySpan>
                                <S.QuantitySpan>{data.product.quantity}</S.QuantitySpan>
                            </S.QuantityContainer>
                            <S.CostContainer>
                                <S.CostSpan>${data.product.price}</S.CostSpan>
                                <S.SubDivButtons>
                                    <S.BuyNowButton>Buy now</S.BuyNowButton>
                                    <S.AddToCartButton
                                        onClick={() => {
                                            
                                            handleAddCartItem(data.product)
                                        }}
                                    >
                                        Add to cart
                                    </S.AddToCartButton>
                                </S.SubDivButtons>
                            </S.CostContainer>
                        </S.ProductInfoContainer>
                    </S.Container>
                </S.Section>
            </S.Main>
        </>
    )
}