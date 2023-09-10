import { SERVER_IP } from 'configs'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Vendordo = () => {


    const [vendorData, setVendorData] = useState({
        Product: [
            {
                id: '',
                name: '',
                category: '',
                description: '',
                imageUrl: '',
                price: 0,
                quantity: '',
                userId: 0
            }
        ],
        email: '',
        hashedPass: '',
        id: 0,
        name: 'test',
        phone: '',
        role: ''
    })

    useEffect(() => {
        fetch(
            `${SERVER_IP}vendor`,
            {
                credentials: 'include'
            }
        )
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setVendorData(resp.vendor)
                console.log(resp)
            })
    }, [])

    return (
        <div style={{ marginTop: '200px' }}>
            <p> welcome {vendorData.name}, your email is: {vendorData.email} </p>

            <p>Your uploaded products</p>

            {
                vendorData.Product.map((item) => {
                    return (
                        <>
                            <div>{item.name}</div>
                            <img style={{ width: '120px', height: '120px' }} src={item.imageUrl} alt="" />
                            <div>{item.price}</div>
                            <span>quantity: </span> <span>{item.quantity}</span>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Vendordo