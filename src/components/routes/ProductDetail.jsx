import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductDescription from '../productDetail/ProductDescription'
import ProductImageDetail from '../productDetail/ProductImageDetail'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDetail = () => {
    const [productInfo, setProductInfo] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProductInfo(res.data.data.product))
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductDetailsContainer>
            <ProductInfo>
                {productInfo && <ProductImageDetail productInfo={productInfo} />}
                {productInfo && <ProductDescription productInfo={productInfo} />}
            </ProductInfo>
            <SimilarProductsSection>
                {productInfo && <SimilarProducts productInfo={productInfo} />}
            </SimilarProductsSection>
        </ProductDetailsContainer>
    )
}

const ProductDetailsContainer = styled.div`
    width: 100%;
`
const ProductInfo = styled.section`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const SimilarProductsSection = styled.section`
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`

export default ProductDetail