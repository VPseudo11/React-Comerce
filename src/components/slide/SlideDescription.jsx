import React from 'react'
import styled from 'styled-components'

const SlideDescription = ({ product }) => {
    console.log(product)
    return (
        <SlideDescriptionContainer>
            <SlideImage>
                <img src={product.productImgs[0]} alt="" />
            </SlideImage>
            <DescriptionSlide>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </DescriptionSlide>
        </SlideDescriptionContainer>
    )
}

const SlideDescriptionContainer = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: all .3s ease;
    z-index: 1;
    max-height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
const SlideImage = styled.div`
    display: flex;
    &>img{
        width: 250px;
        height: 250px;
        object-fit: contain;
    }

    @media (max-width: 768px){
        &>img{
            width: 150px;
        }
    }
`
const DescriptionSlide = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    &>h1{
        width: 100%;
        margin: 0;
        font-size: 1.2rem;
    }
    &>p{
        margin: 0;
        font-size: .9rem;
        text-align: justify;
        color: rgba(0, 0, 0, .6);
    }
`

export default SlideDescription