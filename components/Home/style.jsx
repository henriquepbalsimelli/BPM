import { PrimaryButton } from "@fluentui/react";
import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    margin: 1em;
`

export const Section = styled.section` 
    color: gray;
    overflow: hidden;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
` 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1em;
    padding: 1em;
`

export const SubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 1em;
`

export const ProductInfoContainer = styled.div`
    display: flex;
    margin: 1em;
    flex-direction: column;
    width: 40%;
`

export const ImgContainer = styled.div`
    display: flex;
    align-items: center ;
    width: 35vw;
`

export const Img = styled.img`
    width: 100%;
    max-height: 35em;
    max-width: 35em;
`

export const BrandName = styled.h2`
`

export const ProductName = styled.h1`
    font-size: 900;
    margin: 0em 0em 0.5em 0em;
` 

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`

export const Link = styled.a`
    margin: 1em 0em 1em 0em;
    color: gray;
    text-decoration: none;
    font-family: 'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif';
    cursor: pointer;
    &:hover {
        color: green;
    }
`
export const Description = styled.p`
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
    padding-bottom: 1em;
    padding-top: 1em;
`

export const ConfigContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0em 0em 1em 0em;
    justify-content: space-between;
`
export const ColorSpan = styled.span`
    margin: 0.5em 0em 0em 0em;
    width: auto;
`
export const ColorButton = styled.button`
    background-color:  ${props => props.backgroundColor};
    border-radius: 100%;
    width: 2em;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
    border:none;
    &:focus{
        outline: none;
    }
    cursor: pointer;
`

export const SizeOptions = styled.div`
    display: flex;
    margin: 1em 0em 1em 0em;
    align-items: center;
    justify-content: space-between;
`
export const SizeSelectOptions = styled.select`
    border-radius: 2px;
    appearance: none;
    width: 5em;
    border: 1px solid #dfdfdf;
    &:focus{
        border: indigo;
        
    }
    padding: 0.5em;
`
export const SizeSpan = styled.span`
    margin: 0em 0.5em 0em 0em;
`
export const SizeOption = styled.option`
    margin: 1em;
`

export const QuantityContainer = styled.div`
    display: flex;
    margin: 1em 0em 1em 0em;
    justify-content: space-between;
`
export const QuantitySpan = styled.span`
    margin: 0em 0.5em 0em 0em;
`
export const CostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0em 1em 0em;
`
export const CostSpan = styled.span`

`

export const SubDivButtons = styled.div`
    display: flex;
    align-items: center;
`

export const BuyNowButton = styled(PrimaryButton)`
    background-color: #85cb43;
    border-radius: 2px;
    border: none;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
    color: white;
    font-weight: bold
`

export const AddToCartButton = styled(PrimaryButton)`
    background-color: #33dcf3;
    border-radius: 2px;
    border: none;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
    color: white;
    font-weight: bold;
`