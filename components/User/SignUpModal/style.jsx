import { Spinner } from "@fluentui/react";

const { styled } = require("styled-components");


export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const ExitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none 1px;
    cursor: pointer;
    background-color: #000;
    font-weight: bold;
    color: white;
    margin: 0.3em;
`

export const Title = styled.h1`
    margin: 1em;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Input = styled.input`
    margin: 2em 1em 0em 1em;
`

export const Button = styled.button`
    margin: 1em;
    border: none;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    height: 2em;
`

export const ErrorSpan = styled.p`
    color: red;
    margin: 0em 1em 0em 1em;
`

export const SSpinner = styled(Spinner)`

`
