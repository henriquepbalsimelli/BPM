import { device } from "@/assets/style/GlobalStyle/GlobalStyle";
import { Dropdown, PrimaryButton } from "@fluentui/react";
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
    justify-content: center;
    `
export const ImgContainer = styled.div`
    margin: 1em 1em 1em 1em;
    display: flex;
    padding: 1em;
`

export const ProductInfoContainer = styled.form`
    display: flex;
    margin: 1em;
    flex-direction: column;
    padding: 1em;
    max-width: 40em;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        flex-direction: row;
    }

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

export const ProductDesccriptionContainer = styled.div `
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
    margin: 0em 0em 1em 0em;
`

export const Description = styled.p`
    max-width: 100vw;
    @media ${device.laptop} {
        max-width: 70vw;
    }
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

export const SelectedColorButton = styled.button`
    border: 1px solid #384677;
    border-radius: 100%;
    width: 2em;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
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
export const SizeSelectOptions = styled(Dropdown)`
    border-radius: 2px;
    appearance: none;
    width: 3em;
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
    background-color: ${props => props.disabled ? 'gray' : '#85cb43'};
    border-radius: 2px;
    border: none;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
    color: white;
    font-weight: bold
`

export const AddToCartButton = styled(PrimaryButton)`
    background-color: ${props => props.disabled ? 'gray' : '#33dcf3'};
    border-radius: 2px;
    border: none;
    height: 2em;
    margin: 0em 0.5em 0em 0.5em;
    color: white;
    font-weight: bold;

`