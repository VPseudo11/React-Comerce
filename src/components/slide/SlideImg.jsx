import React from 'react'
import styled from 'styled-components'

const SlideImg = ({image}) => {
    return (
        <SlideContainer>
            <img src={image} alt="" />
        </SlideContainer>
    )
}

const SlideContainer = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: all .3s ease;
    z-index: 1;
    max-height: 300px;
    position: relative;
    display: flex;
    justify-content: center;

    &>img{
        width: 300px;
        object-fit: contain;
    }
`

export default SlideImg