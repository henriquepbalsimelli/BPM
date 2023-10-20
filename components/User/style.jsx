import styled from 'styled-components'
import Link from '../infra/Link'
import { Icon } from '@fluentui/react'


export const SLink = styled(Link)`
    color: white;
`

export const UserContainer = styled.div`
    width: 20%;
    margin: 1em 0em 0em 0em;
    display: flex;
    justify-content: flex-end;
`


export const Column = styled.div`
    display: flex;
    margin: 0.5em;
    flex-direction: column;
    justify-content: center;
`

export const FlexLine = styled.div`
    display: flex;
    color: white;
`
export const RegisterButton = styled.button `
    height: 2em;
    padding: 0em 1em 0em 1em;
    font-family: sans-serif;
    font-weight: bold;
    color: white;
    border: solid 0.5px white;
    border-radius: 1px;
    background-color: #000000;
    border-color: white;
    &:hover {
        background-color: #3b3b3b;
        border-color: white;
        
    }
    margin: 0.2em;
    `

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 1em 0em 0em;

`

export const CartItem = styled(Icon)`
    color: white;
    margin: 0.5em;
    font-size: large;
    height: 1em;
    &:hover {
        color: #3b3b3b;
        cursor: pointer;
    };


`

