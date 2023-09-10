import { PrimaryButton } from "@fluentui/react";
import { styled } from "styled-components";
import ImageBpm from "../infra/Image";
import { device } from "@/assets/style/GlobalStyle/GlobalStyle";

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
    background-color: aliceblue;
    width: 50vw;
    margin: 1em;
    height: fit-content;
    @media ${device.mobileS} { 
        height: 100vh;
        width: 100%;
        flex-direction: row;
    }
    @media ${device.mobileL} { 
        height: 100vh;
        width: 80%;
        flex-direction: column;
        background-color: green;
    }
    @media ${device.laptopL} { 
        height: 100vh;
        width: 70%;
        flex-direction: column;
        background-color: yellow;
    }
    
    
`

export const Circle = styled.circle`
    width: 2em;
    size: 4em;
`

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;    
    width: 100%;
    position: relative;
    @media ${device.mobileS} { 
        height: 20vh;
        width: 100%;
    }
    @media ${device.mobileL} { 
        height: 30vh;
        width: 80%;
    }
    object-fit: contain;
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
    position: relative;
    height: 20%;
`

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media ${device.mobileL} { 
        height: 100vh;
        width: 100%;
        flex-direction: row;
    }

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
export const DropImg = styled(ImageBpm)`
    object-fit: contain;
    overflow: "hidden";
` 