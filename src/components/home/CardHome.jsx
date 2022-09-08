import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = (e) => {
        e.stopPropagation();
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        const obj = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <CardContainer onClick={handleClick}>
            <HeaderProduct>
                <div ></div>
                <img src={product.productImgs[2]} alt="" />
                <img src={product.productImgs[0]} alt="" />
            </HeaderProduct>
            <h1>{product.title}</h1>
            <ProductDetails>
                <PriceDetails>
                    <label>Price:</label>
                    <p>$ {product.price}</p>
                </PriceDetails>
                <button onClick={handleAddCart}><i className="fa-solid fa-cart-plus"></i></button>
            </ProductDetails>
        </CardContainer>
    )
}


const CardContainer = styled.article`
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    padding-top: 15px;
    transition: all .3s ease;

    &>h1 {
        width: 90%;
        font-size: 1rem;
        margin-top: 15px;
    }

    &:hover {
        box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, .3);
        transition: all .3s ease;
    }
`

const HeaderProduct = styled.header`
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    position: relative;
    width: 275px;
    height: 200px;
    &>img{
        position: absolute;
        width: 275px;
        height: 200px;
        object-fit: contain;
        transition: all .5s ease;
    }
    &>img:nth-child(2){
        opacity: 0;
        transition: all .5s ease;
    }
    &:hover{
        &>img{
            opacity: 0;
            transition: all .5s ease;
        }
        &>img:nth-child(2){
            opacity: 1;
            transition: all .5s ease;
        }
    }
`
const ProductDetails = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 25px 0;
    &>button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(244, 112, 83, 1);
        border: none;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, .3));
        cursor: pointer;
        transition: all .5s ease;

        &:hover{
            transform: scale(1.1);
            transition: all .5s ease;
        }
    }
`

const PriceDetails = styled.div`
    &>label{
        font-size: 1rem;
        font-weight: 600;
        color: rgba(0, 0, 0, .3)
    }

    &>p{
        font-size: 1.2rem;
        font-weight: 600;
        padding-left: 5px;
    }
`
export default CardHome