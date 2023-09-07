import React from 'react'

type Cart= {
  id :number
  userId   :number
  productId  :number
  quantity :number 
  }

const Cart:React.FC<Cart> = ({id,userId,productId, quantity}) => {
  return (
    <div>
        <div>{id}</div>
        <div>{userId}</div>
        <div>{productId}</div>
        <div>{quantity}</div>
    </div>
  )
}

export default Cart