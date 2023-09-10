import { device } from "@/assets/style/GlobalStyle/GlobalStyle"
import styled from "styled-components"
import Link from "../../Link"
import { Icon } from "@fluentui/react"

export const CollapseHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export const Li = styled.li`
    list-style: none;
    margin: 0.5em;
`

export const MenuIcon = styled(Icon)`
    font-size: 35px;
`

export const MenuButton = styled.button`
    background-color: transparent;
    color: white;
    height: 5em;
    border: none;
    width: 10em;
`