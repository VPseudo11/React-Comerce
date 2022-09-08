import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({ product, getAllProducts }) => {
    const handleDeleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => getAllProducts())
            .catch(err => console.log(err))
    }
    console.log(product);
    return (
        <CartCard>
            <HeaderCardContainer>
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
            </HeaderCardContainer>
            <AmounAndDeleteContainer>
                <span>Amount: {product.productsInCart.quantity}</span>
                <button><i onClick={handleDeleteProduct} className="fa-regular fa-trash-can"></i></button>
            </AmounAndDeleteContainer>

            <TotalContainer>
                <span>Total:</span>
                <p>{product.price}</p>
            </TotalContainer>
        </CartCard>
    )
}

const CartCard = styled.article`
    width: 95%;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const HeaderCardContainer = styled.header`
    width: 95%;
    margin: 15px 0;
    &>h4{

        margin: 0;
        font-size: 1rem;
        color: rgba(0, 0, 0, .3);
    }
    &>h3{
        margin: 0;
        font-size: 1rem;
        color: rgba(0, 0, 0, .6)
    }

`

const AmounAndDeleteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    &>span{
        font-size: 1rem;
        font-weight: 600;
        color: rgba(0, 0, 0, .6)
    }

    &>button{
        font-size: 1.2rem;
        padding: 5px 8px;
        cursor: pointer;
        background: transparent;
        background: rgba(1, 22, 67, 1);
        border-radius: 5px;
        color: white;
        transition: all .3s ease;

        &:hover{
            background: transparent;
            color: rgba(1, 22, 67, 1);
        }
    }
`
const TotalContainer = styled.div`
    margin: 15px 0;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &>span{
        width: 95%;
        text-align: right;
        font-weight: bold;
        color: rgba(0, 0, 0, .3);
    }

    &>p{
        width: 100%;
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: rgba(0, 0, 0, .6);

        &::before{
            content: '$';
            padding-right: 3px;
        }
    }
`
export default ProductCartInfo