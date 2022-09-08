import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllProducts } from '../../store/slices/product.slice'
import CardHome from '../home/CardHome'
import SlideShow from '../slide/SlideShow'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsSlice)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <HomeContainer>
            <SlideContainer>
                {products && <SlideShow products={products} description={true} />}
            </SlideContainer>
            <CardsProductsContainer>
                {
                    products?.map(item => (
                        <CardHome
                            key={item.id}
                            product={item}
                        />
                    ))
                }
            </CardsProductsContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const SlideContainer = styled.div`
    overflow: hidden;
    width: 90%;
    height: 100%;
    margin: 30px 0;
`

const CardsProductsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 25px 0;
`

export default Home