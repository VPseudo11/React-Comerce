import React from 'react'
import styled from 'styled-components'

import ArrowLefth from '../../assets/iconmonstr-angel-left-thin.svg'
import ArrowRighth from '../../assets/iconmonstr-angel-right-thin.svg'
import SlideShow from '../slide/SlideShow'

const ProductImageDetail = ({ productInfo }) => {
    return (
        <ImageContainer>
            <SlideShow objectInfo={productInfo} description={false} />
            <ImageSelected>
                {
                    productInfo.productImgs.map(img => (
                        <li key={img}>
                            <img src={img} alt="" />
                        </li>
                    ))
                }
            </ImageSelected>
        </ImageContainer>
    )
}

const ImageContainer = styled.article`
    overflow: hidden;
`

const ImageSelected = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 15px;
    &>li{
        display: flex;
        align-items: center;
        border: 1px solid rgba(77, 73, 71, .6);
        padding: 5px;
        border-radius: 5px;
        &>img{
            width: 60px;
            height: 60px;
            object-fit: contain;
        }

        &:hover,
        &:focus {
            border-color: rgba(206, 223, 225);
        }
    }
`
export default ProductImageDetail