import Link from "next/link"
import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: #272727;
    justify-content: space-around;
    height: 10vh;
    flex-direction: column;
`

export const NLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export const FlexSubContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FlexSubContainer2 = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
`