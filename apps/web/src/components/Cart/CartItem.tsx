import { SERVER_IP } from 'configs';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MouseEvent } from 'react';

type Cart = {
  id: number,
  name: string;
  price: number
  TotalPrice: number;
  quantity: number;
  imageUrl: string
}

const Cart: React.FC<Cart> = ({ id, name, imageUrl, price, quantity, TotalPrice }) => {
  return (
    <div>
      <Card className="" style={{ width: '18rem', marginLeft: '300px', marginTop: '60px' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title> <b>{name}</b></Card.Title> <br />
          <Card.Text>
            <h3>Rs:{price}</h3>
          </Card.Text>
          <Button onClick={() => {
            fetch(
              `${SERVER_IP}cart/remove`,
              {
                headers: {
                  'Content-type': 'Application/json'
                },
                method: 'post',
                credentials: 'include',
                body: JSON.stringify({
                  itemId: id
                })
              }
            )
          }} variant="warning"><b>-</b></Button> <b>Qty : 2</b> <Button onClick={() => {
            fetch(
              `${SERVER_IP}cart`,
              {
                headers: {
                  'Content-type': 'Application/json'
                },
                credentials: 'include',
                method: 'post',
                body: JSON.stringify({
                  id: id
                })
              }
            )
          }} variant="warning"><b>+</b></Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cart