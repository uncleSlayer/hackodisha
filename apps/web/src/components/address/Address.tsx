import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartAtom } from "store"
import { MouseEvent } from 'react'
import { SERVER_IP } from 'configs'
import "./Address_style.css"

const Address = () => {

    const [cartArr, setCartArr] = useRecoilState(cartAtom)
    const [houseNo, setHouseNo] = useState('')
    const [city, setCity] = useState('')
    const [addressState, setAddressState] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')

    return (
        <div className='div1'>
            <div className='div2'>
                <div className='user'>
                    <div className='formBox'>
            <form className='frm' action="">
                <h2>Address</h2>
                <p></p>
                <input type="text" placeholder='House No' value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />

                <p></p>
                <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />

                <p></p>
                <input type="text" placeholder='State' value={addressState} onChange={(e) => setAddressState(e.target.value)} />

                <p></p>
                <input type="text" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />

                <p></p>
                <input type="number" placeholder='pin' value={pin} onChange={(e) => setPin(e.target.value)} />

                <p></p>
                <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />

                <br />
                <br />

                <button className='Btn bttn' onClick={(e) => {
                    e.preventDefault()
                    fetch(
                        `${SERVER_IP}pay`,
                        {
                            method: 'post',
                            headers: {
                                'Content-type': 'Application/json'
                            },
                            body: JSON.stringify({
                                cartArrStore: cartArr,
                                orderAddress: {
                                    houseNumber: houseNo,
                                    cityAddr: city,
                                    stateAddr: addressState,
                                    pinAddr: pin,
                                    phone: phone,
                                    country: country
                                }
                            })
                        }
                    )
                        .then((resp) => {
                            return resp.json()
                        })
                        .then((resp) => {
                            console.log(resp)
                            window.location.href = resp.url
                        })

                }}> Proceed to checkout </button>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Address