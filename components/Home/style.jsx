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
    justify-content: center;
    align-items: center;
    width: 80vw;
` 
export const Container = styled.div`
    display: flex;

`

export const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
`

export const ProductInfoContainer = styled.div`
    display: flex;
    margin: 1em;
    flex-direction: column;
    width: 50%;
`

export const Img = styled.img`
    width: 40%;
`

export const BrandName = styled.h2`
`

export const ProductName = styled.h1`
    font-size: 900;
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
    width: 60%;
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
    padding-bottom: 1em;
    padding-top: 1em;
`

export const ConfigContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0em 0em 1em 0em;
`
export const ColorSpan = styled.span`
    margin: 0.5em;
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
`
export const SizeSelectOptions = styled.select`
    border-radius: 2px;
    appearance: none;
    width: 5em;
    border: 1px solid #dfdfdf;
    &:focus{
        outline: none;
        border: indigo;
        
    }
`