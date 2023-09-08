import React, { useEffect, useState } from 'react'
import Cart from './CartItem';
import { SERVER_IP } from 'configs';
import { cartAtom } from "store"
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';



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
    }[]>([])
    return (
        <div>
            {cartArray.map((cartItem) => {
                if (!cartItem) {
                    return
                } else {
                    return (
                        <div key={cartItem.id}>
                            <Cart id={cartItem.id}
                                name={cartItem.name}
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                productId={cartItem.productId}
                            />
                            <br>
                            </br>
                        </div>
                    )
                }
            })}

            <button onClick={() => {
                navigate('/checkout/address')
            }
            }>Proceed to checkout</button>
        </div>
    )
}

export default Your_Cart