import { PrimaryButton } from '@fluentui/react'
import styled from 'styled-components'

export const UserContainer = styled.div`
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
export const RegisterButton = styled(PrimaryButton)`
    &:hover {
        background-color: #3b3b3b;
        border-color: white;
        
    }
    background-color: #000000;
    border-color: white;
    `