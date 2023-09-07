import React, { useState } from 'react'
import Cart from './CartItem';



const Your_Cart = () => {
    const [cartArray, setcartArray] = useState<{
        id :number
        userId   :number
        productId  :number
        quantity :number 
    }[]>([])
    return (
        <div>
             {cartArray.map((cartItem) => {
                if (!cartItem) {
                    return
                } else {
                    return (
                            <div >
                              <Cart id={cartItem.id} 
                                    userId={cartItem.userId}
                                    productId={cartItem.productId}
                                    quantity={cartItem.quantity}
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