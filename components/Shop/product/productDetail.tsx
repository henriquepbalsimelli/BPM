import React, { useCallback, useEffect, useState } from 'react'
import { CartService } from '../../../services/cartService/ui/cartService'
import * as S from './productDetail.style'
import ImageBpm from '../../infra/Image'
import { ISelectableOption } from '@fluentui/react'
import { ShopService } from '../../../services/shopService/ui/index'

export default function ProductDetail(data: any) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [sizes, setSizes] = useState<ISelectableOption[]>([])
    const [fixedColors, setFixedColors] = useState<any>([])

    async function getFamilyDetails(){
        setLoading(true)
        const shopService = new ShopService()
        const res = await shopService.getFamilyDetails(data.familyCode)
        setSelectedProduct(res.body.products)
    }

    useEffect(() => {
        getFamilyDetails().then(() => {
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            setError(error)
        })
    }, [])

    const handleAddCartItem = (product: any) => {
        const newItem = {
            product_code: product.product_code,
            name: product.familyDescription,
            price: product.price,
            quantity: 1,
            size: product.size,
            color: product.color,
            availableQty: product.availableQty
        }
        new CartService().addItemToCart(newItem)
    }

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
        {
                loading ? <h1>Carregando...</h1> : <S.Main>
                    {
                        error ? <h1>Erro ao carregar os dados, por favor recarregue a página</h1> : null
                    }
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
                                <S.ProductName>{selectedProduct?.description}</S.ProductName>
                                <S.ProductDesccriptionContainer>
                                    <S.Description>{selectedProduct?.detailed_description}</S.Description>
                                </S.ProductDesccriptionContainer>
                                <S.ConfigContainer >
                                    <S.ColorSpan>Cor</S.ColorSpan>
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
                                                                            product_code: null,
                                                                            availableQty: null
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
                                    <S.SizeSpan>Tamanho</S.SizeSpan>
                                    <S.SizeSelectOptions
                                        options={sizes}
                                        selectedKey={selectedProduct?.selectedSize?.key ? selectedProduct?.selectedSize?.key : null}
                                        onChange={(e, value) => {
                                            const newSize = value?.text
                                            if (newSize) {
                                                
                                                const availableQty = selectedProduct?.variations?.find((variation: any) => {
                                                    return variation.product_code == value.key
                                                })?.available_qty
                                                
                                                setSelectedProduct(
                                                    {
                                                        ...selectedProduct,
                                                        size: value?.text,
                                                        selectedSize: value,
                                                        product_code: value?.key,
                                                        availableQty: availableQty
                                                    }
                                                )
                                            }
                                        }}
                                    />
                                </S.SizeOptions>
                                <S.CostContainer>
                                    <S.CostSpan>${selectedProduct?.price}</S.CostSpan>
                                </S.CostContainer>
                                    <S.SubDivButtons>
                                        <S.BuyNowButton
                                            disabled={!selectedProduct?.size || !selectedProduct?.color}
                                            type='button'
                                            onClick={() => {
                                                const cart = new CartService().getCart()
                                            }}
                                        >Buy now</S.BuyNowButton>
                                        <S.AddToCartButton
                                            type='button'
                                            disabled={!selectedProduct?.size || !selectedProduct?.color}
                                            onClick={() => {
                                                handleAddCartItem(selectedProduct)
                                            }}
                                        >
                                            Add to cart
                                        </S.AddToCartButton>
                                    </S.SubDivButtons>
                            </S.ProductInfoContainer>
                        </S.Container>
                    </S.Section>
                </S.Main>
        }
            
        </>
    )
}