import React from 'react'
import styled from 'styled-components'
import FormLogin from '../login/FormLogin'
import Background from '../../assets/LoginBackground.jpg'

const Login = () => {
    return (
        <LoginContainer>
            <FormLogin />
            <ImgContainer>
                <img src={Background} alt="" />
            </ImgContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.main`
    border-radius: 15px;
    margin: 5%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: rgba(196, 219, 245, 1);
`

const ImgContainer = styled.div`
    width: 50%;
    height: 600px;
    overflow: hidden;
    &>img{
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px){
        display: none;
    }
`

export default Login