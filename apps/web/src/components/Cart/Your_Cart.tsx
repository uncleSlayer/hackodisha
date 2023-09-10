import { useEffect, useState } from 'react'
// import Cart from './CartItem';
import { cartAtom } from "store"
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import './style_cart.css'
import { SERVER_IP } from 'configs';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MouseEvent } from 'react';



const Your_Cart = () => {

    const [cartArrStore, setCartArrStore] = useRecoilState(cartAtom)
    const navigate = useNavigate()

    const fetchCarts = () => {
        fetch(
            `${SERVER_IP}fetchcarts`,
            {
                method: 'post',
                headers: {
                    'Content-type': 'Application/json'
                },
                credentials: 'include',
                // body: JSON.stringify()
            }
        )
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                setCartArrStore(resp.shoppingCart)
            })
    }

    useEffect(() => {
        fetchCarts()
    }, [])

    return (
        <div className='container' style={{}}>

            <div className='price' >
                <h2>Price Details:</h2>
                <hr /><br />
                <table>
                    <tr>
                        <th>
                            <td><h4>Price (9 items):</h4></td>
                        </th>
                        <th>
                            <td><h4>5000</h4></td>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <td><h4>Total Price:</h4></td>
                        </th>
                        <th><td><h4> 1000</h4></td></th>
                    </tr>
                </table>
                <hr />
                <button className='Btn' onClick={() => {
                    navigate('/checkout/address')
                }
                }>Proceed to checkout</button>
            </div>

            {/* niche kaam karo */}

            {cartArrStore.map((cartItem) => {
                if (!cartItem) {
                    return
                } else {
                    const TotalPrice = cartItem.price * cartItem.quantity;
                    return (
                        <div className='card' key={cartItem.id}>
                            {/* <Cart name={cartItem.name}
                                imageUrl={cartItem.imageURL}
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                TotalPrice={TotalPrice}
                                id={cartItem.id}
                            /> */}

                            <div>
                                <Card className="" style={{ width: '18rem', marginLeft: '300px', marginTop: '60px' }}>
                                    <Card.Img variant="top" src={cartItem.imageURL} />
                                    <Card.Body>
                                        <Card.Title> <b>{cartItem.name}</b></Card.Title> <br />
                                        <Card.Text>
                                            <h3>Rs:{cartItem.price}</h3>
                                        </Card.Text>
                                        <Button onClick={async () => {
                                            await fetch(
                                                `${SERVER_IP}cart/remove`,
                                                {
                                                    headers: {
                                                        'Content-type': 'Application/json'
                                                    },
                                                    method: 'post',
                                                    credentials: 'include',
                                                    body: JSON.stringify({
                                                        id: cartItem.id
                                                    })
                                                }
                                            )
                                            fetchCarts()
                                        }} variant="warning"><b>-</b></Button> <b>Qty : {cartItem.quantity}</b>
                                        <Button onClick={async () => {
                                            await fetch(
                                                `${SERVER_IP}cart`,
                                                {
                                                    headers: {
                                                        'Content-type': 'Application/json'
                                                    },
                                                    credentials: 'include',
                                                    method: 'post',
                                                    body: JSON.stringify({
                                                        id: cartItem.productId
                                                    })
                                                }
                                            )
                                            fetchCarts()
                                        }} variant="warning"><b>+</b></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br>
                            </br>
                        </div>
                    )
                }
            })}
        </div>

    )
}

export default Your_Cart