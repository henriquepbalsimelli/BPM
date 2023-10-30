import { device } from "@/assets/style/GlobalStyle/GlobalStyle"
import Link from "../../../../components/infra/Link"
import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    background-color: #272727;
    justify-content: center;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    border-radius: 0em 0em 1em 1em;
    box-shadow: 0 3px 10px 3px #0000008e;

`

export const NLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export const FlexSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const EmptyContainer = styled.div`
    width: 20%;
`

export const FlexSubContainer2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 1em 0em 1em 0em;
`

export const ImgContainer = styled.div`
    width: 20%;
    position: relative;
    height: 10vh;
    
`