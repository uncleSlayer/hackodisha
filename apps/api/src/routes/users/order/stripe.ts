import { Router } from "express"
import Stripe from "stripe"

export const stripeRouter = Router()

const stripeClient = new Stripe('sk_test_51NhlPWSB6Lpj0maTGM7KVCxGYvu1keFaqL8UlTOnfSFrF5y7rndcaq1ORrEbsONsnodz4oihvWDp2RIwMlS1xPog00lgKyRJo7', {
    apiVersion: '2023-08-16'
})

stripeRouter.post('/pay', async (req, res) => {

    const orderInfo: {
        id: number,
        name: string,
        price: number,
        quantity: number,
        productId: number
    }[] = req.body.cartArrStore

    const orderAddress = req.body.orderAddress

    const stripeOrderInfo = orderInfo.map((item) => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: 1
        }
    })

    const session = await stripeClient.checkout.sessions.create({
        line_items: stripeOrderInfo,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `http://localhost:5173/success/?houseno=${orderAddress.houseNumber}&city=${orderAddress.cityAddr}&state=${orderAddress.stateAddr}&pin=${orderAddress.pinAddr}&phone=${orderAddress.phone}&country=${orderAddress.country}`
    })

    return res.send({
        url: session.url
    })

})