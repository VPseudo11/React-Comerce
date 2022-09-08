import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const SimilarProducts = ({ productInfo }) => {
  const [fillterProducts, setFillterProducts] = useState(null)
  const products = useSelector(state => state.productsSlice)

  useEffect(() => {
    setFillterProducts(products?.filter(product => product.category.name === productInfo.category))
  }, [])

  return (
    <>
      {
        fillterProducts?.map(item => (
          <CardHome key={item.id} product={item} />
        ))
      }
    </>
  )
}

export default SimilarProducts