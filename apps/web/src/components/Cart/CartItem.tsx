import React from 'react'

type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  productId: number;
}

const Cart: React.FC<Cart> = ({ id, name, productId, quantity, price }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <div>{productId}</div>
    </div>
  )
}

export default Cart