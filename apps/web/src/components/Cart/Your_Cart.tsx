import { useEffect, useState } from 'react'
// import Cart from './CartItem';
import { cartAtom } from "store"
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import '../../index.css'
import './style_cart.css'

import { SERVER_IP } from 'configs';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { MouseEvent } from 'react';



const Your_Cart = () => {

    const [cartArrStore, setCartArrStore] = useRecoilState<{
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        productId: 0,
        imageUrl: ''
    }[]>(cartAtom)
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
    console.log(typeof(cartArrStore))

    useEffect(() => {
        fetchCarts()
    }, [])

    return (
        <div className='containercart' style={{}}>

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
            <div className="flexC">
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
                                    
                                        <Card.Img variant="top" className="imagecard" src={cartItem.imageUrl} />
                                        <Card.Body>
                                            <Card.Title> <b>{cartItem.name}</b></Card.Title> <br />
                                            <Card.Text>
                                                <h3>{cartItem.price}₹</h3>
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
                                            }} variant="warning"><b>-</b></Button> 
                                            <b>&#9; &#9;Qty : {cartItem.quantity} &#9; &#9;</b>
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
                                
                                </div>
                            
                            </div>
                        )
                    }
                })}
            </div>
            
        </div>

    )
}

export default Your_Cart