import React, { useEffect, useState } from 'react'
import Cart from './CartItem';
import { SERVER_IP } from 'configs';
import { cartAtom } from "store"
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import './style_cart.css'



const Your_Cart = () => {

    const [cartArrStore, setCartArrStore] = useRecoilState(cartAtom)
    const navigate = useNavigate()

    useEffect(() => {
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
                setcartArray(resp.shoppingCart)
                setCartArrStore(resp.shoppingCart)
            })
    }, [])

    const [cartArray, setcartArray] = useState<{
        id: number;
        name: string;
        price: number;
        quantity: number;
        productId: number;
        imageUrl: string
    }[]>([])
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

            {cartArray.map((cartItem) => {
                if (!cartItem) {
                    return
                } else {
                    const TotalPrice = cartItem.price * cartItem.quantity;
                    return (
                        <div className='card' key={cartItem.id}>
                            <Cart name={cartItem.name}
                                imageUrl={cartItem.imageUrl}
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                TotalPrice={TotalPrice}
                                id={cartItem.id}
                            />
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