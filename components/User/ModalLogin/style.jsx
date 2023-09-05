const { styled } = require("styled-components");


export const ModalContainer = styled.div`
    display: flex;
    width: 20;
    flex-direction: column;

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
    border: none;
    cursor: pointer;
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
    margin: 1em;
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