import { SERVER_IP } from 'configs'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Vendordo = () => {


    const [vendorData, setVendorData] = useState<any>([])

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
                setVendorData(resp)
                console.log(resp)
            })
    }, [])

    return (
        <div style={{ marginTop: '200px' }}>
            venda
        </div>
    )
}

export default Vendordo