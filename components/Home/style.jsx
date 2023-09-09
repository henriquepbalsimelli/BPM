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
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 1em;
`

export const Circle = styled.circle`
    width: 2em;
    size: 4em;
`

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`

export const ContentDiv = styled(ImgDiv)`

    display: flex;
    justify-content: center;
    margin: 1em 0em 0em 0em;
`

export const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
`
export const SubContainerRight = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
    border-left: 1px solid #a3a3a3;
    

`
export const SVGDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 1em;
`

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
export const DesciptionDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 15em;

`
export const TextP = styled.p`
    text-align: center;
`
export const TextPAlignRight = styled.p`
    margin: 0em 0em 0em 1em;
`