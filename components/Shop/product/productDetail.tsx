import React, { useCallback, useEffect, useState } from 'react'
import { CartService } from '../../../services/CartService/cartService';
import * as S from './productDetail.style'
import ImageBpm from '../../infra/Image'
import { ISelectableOption } from '@fluentui/react';



export default function ProductDetail(data: any) {

    const handleAddCartItem = (product: any) => {
        new CartService().addItemToCart(product)
    }

    const parsedData = JSON.parse(data.product)

    const [selectedProduct, setSelectedProduct] = useState<any>(parsedData)
    const [sizes, setSizes] = useState<ISelectableOption[]>([])
    const [fixedColors, setFixedColors] = useState<any>([])

    const findSizes = useCallback((color: any) => {
        const availableSizes = selectedProduct?.variations?.filter((variation: any) => {
            return variation.color == color
        }).map((variation: any) => {
            return {
                key: variation.product_code,
                text: variation.size,
                disabled: false
            }
        }).filter((size: any, index: number, self: any) => {
            return index === self.findIndex((t: any) => {
                return t.text === size.text
            })
        })
        console.log('availableSizes', availableSizes)


        return availableSizes
    }, [selectedProduct?.variations])


    useEffect(() => {

        const fixedColors = selectedProduct?.variations?.map((variation: any) => {
            return variation.color
        }).filter((color: any, index: number, self: any) =>
            index === self.findIndex((t: any) => (
                t === color
            ))
        )
        setFixedColors(fixedColors)

        let sizes = selectedProduct?.variations?.map((variation: any) => {
            return {
                key: variation.product_code,
                text: variation.size,

            }
        }).filter((size: any, index: number, self: any) =>
            index === self.findIndex((t: any) => (
                t.text === size.text
            ))
        )

        if (selectedProduct?.color){
            sizes = findSizes(selectedProduct?.color)
        }
            
        setSizes(sizes)
    }, [findSizes, selectedProduct])

    
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
                            <S.ProductName>{selectedProduct.description}</S.ProductName>
                            <S.ProductDesccriptionContainer>
                                <S.Description>{selectedProduct.detailed_description}</S.Description>
                            </S.ProductDesccriptionContainer>
                            <S.ConfigContainer >
                                <S.ColorSpan>Color</S.ColorSpan>
                                <div>
                                    {
                                        fixedColors?.map((color: any, index: any) => {
                                            if (color == selectedProduct.color) {
                                                return (
                                                    <S.SelectedColorButton
                                                        type='button'
                                                        key={index}
                                                        style={{ backgroundColor: color }}
                                                        onClick={(e) => {
                                                            setSelectedProduct({
                                                                ...selectedProduct,
                                                                color: null,
                                                                size: null
                                                            })
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
                                                            if (newColor != selectedProduct.color) {
                                                                setSelectedProduct(
                                                                    {
                                                                        ...selectedProduct,
                                                                        color: color,
                                                                        size: null,
                                                                        product_code: null
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
                                    options={sizes}
                                    selectedKey={selectedProduct?.selectedSize?.key ? selectedProduct?.selectedSize?.key : null}
                                    onChange={(e, value) => {
                                        const newSize = value?.text
                                        if (newSize){
                                            setSelectedProduct(
                                                {
                                                    ...selectedProduct,
                                                    size: value?.text,
                                                    selectedSize: value
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
            </S.Main>
        </>
    )
}