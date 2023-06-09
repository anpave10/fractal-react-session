import { useEffect } from 'react'
import { Product } from '../../models/productSlice'
import { ProductPropsInterface } from '../../models/product'

export default function ProductComponent(props: ProductPropsInterface) {

  const { product } = props

  return (
    <div>
      <div>
        <label>Name: {product.title}</label>
        <label>Price: {product.price}</label>
        <label>Brand: {product.brand}</label>
      </div>
      <div>
        <img src={product.thumbnail} />
      </div>
    </div>
  )
}
