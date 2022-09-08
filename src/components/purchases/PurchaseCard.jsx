import React from 'react'
import styled from 'styled-components'
import ProductPurchase from './ProductPurchase';

const PurchaseCard = ({ purchase }) => {
    console.log(purchase);
    return (
        <CardContainer>
            <h3>{purchase.updatedAt}</h3>
            <PurchaseInfo>
                {
                    purchase.cart.products.map(item => (
                        <ProductPurchase key={item.id} product={item} />
                    ))
                }
            </PurchaseInfo>
        </CardContainer>
    )
}

const CardContainer = styled.article`
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>h3{
        width: 95%;
        font-size: 1rem;
        color: rgba(0, 0, 0, .3);
        border-bottom: 2px solid rgba(1, 22, 67);
        margin-top: 15px;
    }
`

const PurchaseInfo = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`
export default PurchaseCard