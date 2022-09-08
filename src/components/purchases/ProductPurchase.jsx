import React from 'react'
import styled from 'styled-components'

const ProductPurchase = ({ product }) => {
    return (
        <ProductContainer>
            <h2>{product.title}</h2>
            <p>{product.productsInCart.quantity}</p>
            <p>{product.price}</p>
        </ProductContainer>
    )
}

const ProductContainer = styled.li`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .6);
    width: 90%;
    justify-content: space-between;
    &>h2{
        margin: 0;
        font-size: 1rem;
        width: 325px;
        color: rgba(0, 0, 0, .6);
    }
    &>p{
        margin: 0;
        width: 75px;
        text-align: center;
        color: rgba(0, 0, 0, .6);
    }
`

export default ProductPurchase