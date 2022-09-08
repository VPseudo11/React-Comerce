import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ProductDescription = ({ productInfo }) => {
    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)
    const navigate = useNavigate()

    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    const handleAddCart = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        
        const obj = {
            id: productInfo.id,
            quantity: counter
        }

        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
                navigate('/')
            })
    }

    return (
        <ProductDescriptionContainer>
            <h1>{productInfo.title}</h1>
            <BodyProductDescription>
                <p>{productInfo.description}</p>
                <PurchaseSection>
                    <PurchaseDiv>
                        <PriceDiv>
                            <label>Price</label>
                            <p>$ {productInfo.price}</p>
                        </PriceDiv>
                        <AddButtonsDiv>
                            <button onClick={handleMinus}>-</button>
                            <p>{counter}</p>
                            <button onClick={handlePlus}>+</button>
                        </AddButtonsDiv>
                    </PurchaseDiv>
                    <button onClick={handleAddCart}>Add to cart <i className="fa-solid fa-cart-arrow-down"></i></button>
                </PurchaseSection>
            </BodyProductDescription>
        </ProductDescriptionContainer>
    )
}
const ProductDescriptionContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>h1{
        width: 90%;
        padding-left: 15px;
        margin: 15px 0;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, .6);
    }
`

const BodyProductDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0 ;
    &>p{
        margin: 15px 0;
        width: 90%;
        text-align: justify;
        font-size: 1rem;
        color: rgba(0, 0, 0, .6)
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }
`

const PurchaseSection = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &>button{
        width: 70%;
        padding: 12px 0;
        border: none;
        background: rgba(77, 73, 71, 1);
        color: white;
        font-size: 1rem;
        margin: 15px 0;
        transition: all .3s ease;

        &:hover{
          background: transparent;
          color: rgba(77, 73, 71, 1);
          border: 1px solid rgba(77, 73, 71, 1);
          transition: all .3s ease;
        }
    }
`

const PurchaseDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PriceDiv = styled.div`
    margin: 0 15px;

    &>label{
        color: rgba(0, 0, 0, .3);
        font-size: 1rem;
        font-weight: bold;
    }

    &>p{
        font-size: 1.2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .6);
        margin: 5px 0 0 5px;
    }
`

const AddButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &>button{
        width: 30px;
        height: 25px;
        font-size: 1.5rem;
        text-align: center;
        line-height: 90%;
        background: transparent;
        color: rgba(0, 0, 0, .6);
        border: 1px solid rgba(0, 0, 0, .6);
        cursor: pointer;
    }

    &>p{
        font-size: .9rem;
        border: 1px solid rgba(0, 0, 0, .6);
        padding: 2px 15px;
    }
`

export default ProductDescription