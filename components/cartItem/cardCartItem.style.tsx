import { Icon } from '@fluentui/react';
import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    width: 80%;
    margin: 1em 0em 1em 0em;
`

export const ImgDiv = styled.div`
    width: 20%;
    margin: 0.5em;
    background-color: #a9a9a9;
`
export const ItemDataDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    margin: 0.5em;
`
export const ItemDescription = styled.div`
    height: fit-content;
    font-weight: bolder;
`

export const ItemDetail = styled.span`
    display: flex;
    align-items: center;
    height: fit-content;
    font-weight: light;
`

export const QuantityDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    margin: 0.5em 0em 0em 0em;
    font-weight: bolder;
    width: 100%;
`

export const QuantityInput = styled.input`
    width: 2em;
    text-align: center;
    justify-content: center;
    border: none;
    &:focus {
        outline: none;
        
    }    
    
`

export const PlusIcon = styled(Icon)`
    &:hover {
        cursor: pointer;
    };
    font-weight: bold;
    font-size: 12px;
    margin: 0em 0.5em 0em 0.5em;


`
export const MinusIcon = styled(Icon)`
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    font-weight: bold;
    font-size: 12px;
    margin: 0em 0.5em 0em 0.5em;

`

export const Color = styled.div`
    border-radius: 100%;
    width: 1em;
    height: 1em;
    margin: 0em 0.5em 0em 0.5em;
    &:focus{
        outline: none;
    }
    cursor: pointer;
    
`

export const QuantityInputDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0em;
    box-shadow: 0 2px 3px 1px #e3e3e3;
    border-radius: 4px;
    border: 1px solid #a9a9a9;
`
export const PriceDiv = styled.div`
    margin: 0em 0em 0em 0em;
`
