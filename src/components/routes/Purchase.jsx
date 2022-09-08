import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'

const Purchase = () => {
    const [purchases, setPurchases] = useState(null)

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])
    console.log(purchases)
    return (
        <PurchasesContainer>
            <h1>My purchases</h1>
            <CardsContainer>
                {
                    purchases?.map(purchase => (
                        <PurchaseCard key={purchase.id} purchase={purchase} />
                    ))
                }
            </CardsContainer>
        </PurchasesContainer>
    )
}

const PurchasesContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &>h1 {
        width: 100%;
        font-size: 2rem;
        font-weight: bold;
    }
`

const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`

export default Purchase