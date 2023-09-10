import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './Product.css'
import { SERVER_IP } from 'configs';
interface Product {
  id: number,
  name: string;
  category: string;
  price: number;
  desc: string;
  quantity: number;
  imageUrl: string
}

const Product: React.FC<Product> = ({ id, name, category, price, desc, imageUrl }) => {
  return (

    <Card className='card'>
      <Card.Img className="imagecard" src={imageUrl} />
      <Card.Body className='cardbody'>

        <Card.Title className='cardtitle'> {name} </Card.Title>

        <Card.Text className="imagdesc">

          {desc}
        </Card.Text>

        <b>Price:Rs{price}</b>
        <Button className="cartbutton" onClick={async () => {
          await fetch(
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

        }}>+</Button>
      </Card.Body>
    </Card>

  )
}

export default Product