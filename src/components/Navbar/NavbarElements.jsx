import styled from  'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice}  from 'react-icons/fa'

export const Nav = styled.nav `
  
    background : transparent;
    height : 80px;
    width : 100%;
    display : flex;
    justify-content : center;
    font-weight : 700;
    position : fixed;
    background-color : #e31837;
`;


export const NavLink = styled(Link) `
    
     color : #fff;
     font-size : 2rem;
     display :flex;
     align-items : center;
     text-decoration : none ;
     cursor : pointer;

     @media screen and(max-width : 400px) {
         

     }
` ;


export const NavIcon = styled.div `
    display : block;
    positon : absolute;
    top: 0 ;
    right : 0;
    cursor : pointer ;
    color : #fff;

    p {
        transform  : translate (-175% , 100%);
        font-weight : bold;
        position : absolute;
        right: 200px;
        top : 40%;

    }
`

export const Bars = styled(FaPizzaSlice) `
    font-size : 2rem;
    transform  : translate (-50% , -15%);
    position : absolute;
    right: 50px;
    top : 20px
`