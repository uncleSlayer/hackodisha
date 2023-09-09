import React from 'react'
import {Button, Card  }from 'react-bootstrap';

type Cart = {
  name: string;
  price: number
  TotalPrice: number;
  quantity: number;
  imageUrl: string
}

const Cart: React.FC<Cart> = ({  name, imageUrl,price, quantity, TotalPrice }) => {
  return (
    <div>
      <Card className="" style={{ width: '18rem' , marginLeft: '300px', marginTop:'60px'}}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title> <b>{name}</b></Card.Title> <br />
        <Card.Text>
          <h3>Rs:{price}</h3>
        </Card.Text>
        <Button variant="warning"><b>-</b></Button> <b>Qty : 2</b> <Button variant="warning"><b>+</b></Button>              
      </Card.Body>
      </Card>
    </div>
  )
}

export default Cart