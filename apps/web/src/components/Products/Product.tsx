import React from 'react'
import './Product.css'
interface Product {
    id:number,
    name: string;
    category: string;
    price: number;
    desc: string;
    quantity: number;
    imageUrl: string
  }

const Product:React.FC<Product> = ({id,name,category,price, desc,quantity,imageUrl}) => {
  return (
    <div className="productCard">
        <div ><img className='productCardImage' src={imageUrl} /></div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{category}</div>
        <div>{price}</div>
        <div>{desc}</div>
        <div>{quantity}</div>
    </div>
  )
}

export default Product