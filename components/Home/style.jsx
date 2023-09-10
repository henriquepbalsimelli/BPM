import { PrimaryButton } from "@fluentui/react";
import { styled } from "styled-components";
import { device } from "@/assets/style/GlobalStyle/GlobalStyle";


export const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`



export const ImgDiv = styled.div`
    margin: 1em 0em 1em 0em;
    display: flex;
    justify-content: center;
`



export const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0em 1em 0em 0em;
    width: 100%;
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
     @media ${device.laptop} {
        width: 50vw;
    }
`

export const DropText = styled.div`
    @media ${device.mobileS} { 
        max-width: 60vw;
    }
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
        flex-direction: row;
        width: 50vw;
        border-left: 1px gray solid;
        padding: 1em;
    }

`
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} { 
        flex-direction: row;
    }
`