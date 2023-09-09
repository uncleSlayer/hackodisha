import React, { useEffect } from 'react'

const Success = () => {
    const param = new URLSearchParams(location.search)

    const houseNo = param.get('houseno')
    const city = param.get('city')
    const state = param.get('state')
    const pin = param.get('pin')
    const phone = param.get('phone')
    const country = param.get('country')

    console.log(houseNo, city, state, pin, phone, country)

    useEffect(() => {
        fetch(
            'http://localhost:8000/order/create',
            {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify({
                    orderAddress: {
                        houseNo: houseNo,
                        city: city,
                        state: state,
                        country: country,
                        phone: phone,
                        pin: pin
                    }
                })
            }
        )
            .then((resp) => {
                return resp.json
                console.log(resp)
            })
            .then((resp) => {
                console.log(resp)
            })
    }, [])

    return (
        <div style={{ marginTop: '200px' }}>Success</div>
    )
}

export default Success