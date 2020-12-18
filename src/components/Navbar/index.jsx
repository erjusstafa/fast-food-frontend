import React from 'react'
import { NavIcon } from './NavbarElements'
import {Nav , NavLink  ,Bars} from './NavbarElements'

 const Navbar = ({ togle}) => {
    return (
        <>
        <Nav>
            <NavLink to="/">Pizza</NavLink>
            <NavIcon onClick={togle}>
                <p>MENU</p>
                <Bars />
            </NavIcon>
        </Nav>
        </>
    )
}

export default  Navbar