import styled from 'styled-components';

export const CartHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    background-color: black;
    color: white;
    font-weight: bold;
    height: fit-content;
`

export const CartSpanBold = styled.span`
    margin: 0.5em;
    font-size: medium;
`
export const CartSpan = styled.span`
    margin: 0.5em;
    font-weight: normal;
`

export const ModalContainer = styled.body`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-height: 75vh;
    overflow-x: auto;
` 
export const ModalBody = styled.div`
    width: 50vw;
    height: 10vh;
    margin: 0em;
    position: absolute;
    right: 0;
    top: 0;
`
export const ProductsInCartDiv = styled.div`
    width: 100%;
`
export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ClearCartButton = styled.button`
    width: 80%;
    height: 2em;
    margin: 1em 0em 0em 0em;
    border: none;
    background-color: #f1efef;
    border: 1px solid #ccc;
    font-weight: bold;
    font-size: small;
    &:hover {
        cursor: pointer;
    };
    border-radius: 3px;
`

export const FinishCartButton = styled.button`
    width: 80%;
    height: 2em;
    margin: 0em;
    border: none;
    background-color: #000000;
    font-weight: bold;
    font-size: small;
    &:hover {
        cursor: pointer;
    };
    border-radius: 3px;
    color: white;
    margin: 1em 0em 0em 0em;
`
export const TotalSpan = styled.span`
    margin: 0em 0em 0em 0em;
    font-size: medium;
    font-weight: bold;
`
export const CartItemHeaderTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const CloseButton = styled.button`
    margin: 0em 0em 0em 0em;
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: small;
    &:hover {
        cursor: pointer;
    };
    border-radius: 3px;
    color: black;
`
