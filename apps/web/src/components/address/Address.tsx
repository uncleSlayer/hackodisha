import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartAtom } from "store"
import { MouseEvent } from 'react'
import { SERVER_IP } from 'configs'

const Address = () => {

    const [cartArr, setCartArr] = useRecoilState(cartAtom)
    const [houseNo, setHouseNo] = useState('')
    const [city, setCity] = useState('')
    const [addressState, setAddressState] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')

    return (
        <div>
            <form action="">
                <p>House No</p>
                <input type="text" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />

                <p>City</p>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

                <p>state</p>
                <input type="text" value={addressState} onChange={(e) => setAddressState(e.target.value)} />

                <p>country</p>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />

                <p>pin</p>
                <input type="number" value={pin} onChange={(e) => setPin(e.target.value)} />

                <p>Phone</p>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <br />
                <br />

                <button onClick={(e) => {
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
    )
}

export default Address