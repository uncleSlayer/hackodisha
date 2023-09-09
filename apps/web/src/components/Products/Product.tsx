import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card  }from 'react-bootstrap';
import './Product.css'
interface Product {
  id: number,
  name: string;
  category: string;
  price: number;
  desc: string;
  quantity: number;
  imageUrl: string
}

const Product: React.FC<Product> = ({ name, category, price ,desc, imageUrl }) => {
  return (
    
    <Card  className='card'>
      <Card.Img className="imagecard" variant="top" src={imageUrl} />
      <Card.Body className='cardbody'>
        <Card.Title> <b>{name}</b></Card.Title>

        <Card.Text className="imagdesc">

          {desc}
        </Card.Text>
        <Button variant="warning">+</Button>              <b>Price:Rs{price}</b>
      </Card.Body>
    </Card>
    
  )
}

export default Product