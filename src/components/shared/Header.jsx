import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './../../assets/Logo.png'

const Header = () => {
    return (
        <HeaderContainer>
            <NavLink to='/'>
                <img src={Logo} alt="E - comerce" />
            </NavLink>
            <SearchContainer>
                <input type="text" />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </SearchContainer>
            <NavContainer>
                <CheckMenu type='checkbox' id='check' />
                <MenuResponsive htmlFor='check'><i className="fa-solid fa-bars"></i></MenuResponsive>
                <ul>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/purchase'>Purchase</NavLink></li>
                    <li><NavLink to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    &>a{
        margin-left: 56px;
        display: flex;
        align-items: center;
        &>img{
            height: 50px;
        }
        @media (max-width: 768px){
            margin-left: 12px;
        }
    }
`

const SearchContainer = styled.div`
    margin-left: 24px;
    display: flex;
    align-items: center;
    width: 100%;

    &>input{
        width: 100%;
        height: 35px;
        border: 1px solid rgba(0, 0, 0, .6);
        border-radius: 5px 0 0 5px;
        font-size: 16px;
        font-weight: medium;
        color: rgba(0, 0, 0, .6);
    }

    &>button{
        font-size: 24px;
        padding: 5px 7px 4px 7px;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, .6);
        border-radius: 0 5px 5px 0;
        color: rgba(0, 0, 0, .6)
    }

    @media (max-width:768px){
        &>input{
            height: 30px;
            font-size: 14px;
        }
        &>button{
            padding: 5px 5px 4px 5px;
            font-size: 20px;
        }
    }
`

const NavContainer = styled.nav`
    margin-right: 56px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    &>ul{
        list-style: none;
        display: flex;
        padding: 0;
        align-items: center;
        &>li{
            border: 1px solid rgba(0, 0, 0, .3);
            padding: 8px 24px;
            color: rgba(0, 0, 0, .6);
            &>a{
                font-size: 16px;
                font-weight: 500;
                text-decoration: none;
                color: rgba(0, 0, 0, .6);
            }
            &:hover,
            &:focus{
                border-bottom: 2px solid rgba(0, 0, 0, .6);
            }
        }
    }

    @media (max-width: 768px){
        margin-right: 12px;

        &>label{
            display: block;
        }
        &>ul{
            z-index: 2;
            position: fixed;
            width: 100%;
            height: 25vh;
            background: rgba(130, 143, 156, 1);
            top: 50px;
            right: -100%;
            flex-direction: column;
            transition: all .5s ease;
            &>li{
                width: 85%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        &>input:checked ~ul{
            right: 0;
        }
    }
`

const CheckMenu = styled.input`
    display: none;
`

const MenuResponsive = styled.label`
    font-size: 24px;
    color: rgba(0, 0, 0, .6);
    float: right;
    line-height: 65px;
    cursor: pointer;
    display: none;
`

export default Header