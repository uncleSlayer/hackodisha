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

const containerStyle = {
    display: 'flex', 
    flexDirection: 'column' as 'column', 
    width: '100%',
    border: '2px solid black', 
    padding: '10px', 
};

const rowStyle = {
    display: 'flex', 
    flexDirection: 'row' as 'row',
    border: '2px solid blue',
    margin: '5px', 
};

const colStyle = {
    display: 'flex',
    flex: '1', 
    padding: '10px', 
};

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
    console.log(typeof (cartArrStore))

    const [totalPrice, setTotalPrice] = useState(0);

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const newTotalPrice = cartArrStore.reduce((acc: number, cartItem) => {
            acc += cartItem.price * cartItem.quantity;
            // Return the accumulator value
            return acc;
        }, 0); // Initialize the accumulator to 0

        setTotalPrice(newTotalPrice)
    }, [cartArrStore]);

    useEffect(() => {
        const newTotalItem = cartArrStore.reduce((acc: number, cartItem) => {
            acc += cartItem.quantity;
            // Return the accumulator value
            return acc;
        }, 0); // Initialize the accumulator to 0

        setTotalItems(newTotalItem)
    }, [cartArrStore]);


    useEffect(() => {
        fetchCarts()
    }, [])



    return (
        <div className='containercart' style={{}}>

            <div className='price_container' >
                <h2>Price Details:</h2>
                <hr /><br />
                <div className='totals'>
                    <div>Total Items: {totalItems}</div>
                    <div>Total Cost: {totalPrice}</div>
                </div>

                <div className="container" style={containerStyle}>
                    <div className="row" style={rowStyle}>
                        <div className="col" style ={colStyle}>Item Name</div>
                        <div className="col" style ={colStyle}>Unit Price</div>
                        <div className="col" style ={colStyle}>Quantity</div>
                        <div className="col" style ={colStyle}>Total Price</div>
                    </div>
                    {cartArrStore.map((cartItem) => {
                        return (
                            <div className="row" style ={rowStyle} key={cartItem.id}>
                                <div className="col" style ={colStyle}>{cartItem.name}</div>
                                <div className="col" style ={colStyle}>{cartItem.price}</div>
                                <div className="col" style ={colStyle}>{cartItem.quantity}</div>
                                <div className="col" style ={colStyle}>{cartItem.price * cartItem.quantity}</div>
                            </div>
                        );
                    })}
                </div>



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
                     
                        return (
                            <div className='card' key={cartItem.id}>
                            

                                <div>

                                    <Card.Img variant="top" className="imagecard" src={cartItem.imageUrl} />
                                    <Card.Body>
                                        <Card.Title> <b>{cartItem.name}</b></Card.Title> <br />
                                        <Card.Text>
                                            <h3 style={{ color: '#000' }}>Single Unit: {cartItem.price}₹</h3>
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