import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import styled from 'styled-components'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState(null)
    const [total, setTotal] = useState(null)

    const getAllProducts = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => {
                const products = res.data.data.cart.products
                setCartProducts(products)
                const total = products.reduce((acc, cv) => {
                    return (Number(cv.price) * cv.productsInCart.quantity) + acc
                }, 0)
                setTotal(total)
            })
            .catch(err => setCartProducts())
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const handleCheckout = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }

        axios.post(URL, obj, getConfig())
            .then(res => {
                getAllProducts()
                setTotal(0)
            })
            .catch(err => console.log(err))
    }

    return (
        <CartContainer>
            <h1>Shopping Cart</h1>
            <CartBodyContainer>
                <InfoProductsSecction>
                    {
                        cartProducts?.map(product => (
                            <ProductCartInfo key={product.id} product={product} getAllProducts={getAllProducts} />
                        ))
                    }
                </InfoProductsSecction>
                <PurchaseSection>
                    <span>Total: {cartProducts?.length} products</span>
                    <p>{total}</p>
                    <button onClick={handleCheckout}>Checkout</button>
                </PurchaseSection>
            </CartBodyContainer>
        </CartContainer>
    )
}

const CartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const CartBodyContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }
`
const InfoProductsSecction = styled.section`
    margin: 15px 0;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`

const PurchaseSection = styled.section`
    border: 1px solid rgba(1, 22, 67, 1);
    border-radius: 5px;
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;

    &>span{
        font-size: 1.2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .4);
        width: 90%;
    }

    &>p{
        margin: 0;
        width: 90%;
        text-align: right;
        font-size: 1.2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .6);
        &::before{
            content: '$';
            padding-right: 3px;
        }
    }

    &>button{
        margin: 15px 0;
        width: 80%;
        padding: 9px 0;
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
        background: rgba(1, 22, 67, 1);
        border-radius: 5px;
        transition: all .5s ease;

        &:hover{
            background: transparent;
            color: rgba(1, 22, 67, 1);
            border: 1px solid rgba(1, 22, 67, 1);
            box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .4);
        }
    }
`

export default Cart