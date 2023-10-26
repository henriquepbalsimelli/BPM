import React, { useContext, useEffect, useMemo, useState } from 'react'
import { CartService } from '../../../services/CartService/cartService';
import * as S from './productDetail.style'
import ImageBpm from '../../infra/Image'
import {ProductDetailInterface} from '../../../src/Interfaces/integration/ProductDetailInterface'



export default function ProductDetail({product}: any) {

    // const selectedColor = useMemo(() => {
    //     return selectedProduct.color
    // }, [selectedProduct])

    const handleAddCartItem = (product: any) => {
        new CartService().addItemToCart(product)
    }

    return (
        <>
            {/* <S.Main>
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
                            <S.ProductName>{selectedProduct.description}</S.ProductName>
                            <S.ProductDesccriptionContainer>
                                <S.Description>{selectedProduct.detailed_description}</S.Description>
                            </S.ProductDesccriptionContainer>
                            <S.ConfigContainer >
                                <S.ColorSpan>Color</S.ColorSpan>
                                <div>
                                    {
                                        selectedProduct?.colors?.map((color, index) => {
                                            if (color == selectedProduct.color) {
                                                return (
                                                    <S.SelectedColorButton
                                                        type='button'
                                                        key={index}
                                                        style={{ backgroundColor: color }}
                                                        onClick={(e) => {
                                                            const newColor = e.currentTarget.style.backgroundColor
                                                            if (newColor != selectedColor) {
                                                                setSelectedProduct(
                                                                    {
                                                                        ...selectedProduct,
                                                                        color: color
                                                                    }
                                                                )
                                                            }
                                                        }}


                                                    />
                                                )
                                            }
                                            else {
                                                return (
                                                    <S.ColorButton
                                                        type='button'
                                                        key={index}
                                                        style={{ backgroundColor: color }}
                                                        onClick={(e) => {
                                                            const newColor = e.currentTarget.style.backgroundColor
                                                            if (newColor != selectedColor) {
                                                                setSelectedProduct(
                                                                    {
                                                                        ...selectedProduct,
                                                                        color: color
                                                                    }
                                                                )
                                                            }
                                                        }}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </S.ConfigContainer>
                            <S.SizeOptions >
                                <S.SizeSpan>Size</S.SizeSpan>
                                <S.SizeSelectOptions
                                    options={selectedProduct?.sizes}
                                    onChange={(e, value) => {
                                        const newSize = value?.text
                                        if (newSize){
                                            setSelectedProduct(
                                                {
                                                    ...selectedProduct,
                                                    size: value?.text
                                                }
                                            )
                                        }
                                    }}
                                />
                            </S.SizeOptions>
                            <S.CostContainer>
                                <S.CostSpan>${selectedProduct.price}</S.CostSpan>
                                <S.SubDivButtons>
                                    <S.BuyNowButton
                                        disabled={!selectedProduct.size || !selectedProduct.color}
                                        type='button'
                                        onClick={() => {
                                            const cart = new CartService().getCart()
                                        }}
                                    >Buy now</S.BuyNowButton>
                                    <S.AddToCartButton
                                        type='button'
                                        disabled={!selectedProduct.size || !selectedProduct.color}
                                        onClick={() => {
                                            handleAddCartItem(selectedProduct)
                                        }}
                                    >
                                        Add to cart
                                    </S.AddToCartButton>
                                </S.SubDivButtons>
                            </S.CostContainer>
                        </S.ProductInfoContainer>
                    </S.Container>
                </S.Section>
            </S.Main> */}

        </>
    )
}