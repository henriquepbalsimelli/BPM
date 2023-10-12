import { PrimaryButton } from '@fluentui/react'
import styled from 'styled-components'

export const UserContainer = styled.div`
    margin: 1em 0em 0em 0em;
    display: flex;
`

export const Column = styled.div`
    display: flex;
    background-color: white;
    margin: 0.5em;
    flex-direction: column;
    justify-content: center;
`

export const FlexLine = styled.div`
    display: flex;
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
    margin: 0em 0em 0.5em 0em;
    `

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;

`