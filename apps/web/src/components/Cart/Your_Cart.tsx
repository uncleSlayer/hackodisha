import React, { useEffect, useState } from 'react'
import Cart from './CartItem';
import { SERVER_IP } from 'configs';



const Your_Cart = () => {
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

            <button>Proceed to Payment</button>
        </div>
    )
}

export default Your_Cart