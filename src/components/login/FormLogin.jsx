import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const FormLogin = () => {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                navigate(`/`)
            })
            .catch(err => console.log(err))

        reset({
            email: '',
            password: ''
        })
    }

    return (
        <FormContainer onSubmit={handleSubmit(submit)}>
            <h1>Welcome to my E-Comerce</h1>
            <InputContainer>
                <label htmlFor="email">Email:</label>
                <input {...register('email')} type="text" id='email' />
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">Password:</label>
                <input {...register('password')} type="password" id='password' />
            </InputContainer>
            <button>Login</button>
            <p>Don't have an account?<a href="">Sign up</a></p>
        </FormContainer>
    )
}


const FormContainer = styled.form`
    border-radius: 10px;
    width: 350px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, .3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, .37);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, .18);

    &>h1{
        font-size: 1.2rem;
        color: rgba(0, 0, 0, .6);
        margin-bottom: 30px;
    }

    &>button {
        margin-top: 15px;
        font-size: .9rem;
        font-weight: bold;
        background: rgba(221, 233, 243, 1);
        padding: 5px 25px;
        border-radius: 15px;
        color: rgba(29, 30, 107, 1);
        border: 1px solid rgba(29, 30, 107, 1);

        &:hover{
            background: rgba(29, 30, 107, 1);
            border: 1px solid rgba(221, 233, 243, 1);
            color: rgba(221, 233, 243, 1);
        }
    }

    &>p{
        font-size: .8rem;
        color: rgba(0, 0, 0, .6);
        &>a{
            text-decoration: none;
            color: rgba(29, 30, 107, 1);
        }
    }
    @media (max-width: 768px){
        margin: 0 15px;
    }
`
const InputContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px 0;

    &>label{
        width: 100%;
        font-size: 1rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .4);
    }

    &>input{
        width: 100%;
        height: 30px;
        border: none;
        border-bottom: 2px solid rgba(0, 0, 0, .4);
        margin: 5px 0;
        border-radius: 5px;
        font-size: 1rem;
        color: rgba(0, 0, 0, .6);
        transition: all .3s ease;
        background: transparent;

        &:hover {
            border: 2px solid rgba(0, 0, 0, .4);
        }
    }
`

export default FormLogin