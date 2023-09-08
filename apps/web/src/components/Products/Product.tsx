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
    <div className='section'>
    <Card className="" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title> <b>{name}</b></Card.Title>
        <Card.Text>
          <h3></h3>
          {desc}
        </Card.Text>
        <Button variant="warning">+</Button>              <b>Price:Rs{price}</b>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product