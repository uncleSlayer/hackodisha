import e, { Router } from "express";
import JWT from "jsonwebtoken"
import { JWT_SECRET } from "configs";
import { prisma } from "database";
import { log } from "console";

export const orderRouter = Router()

orderRouter.post('/order/create', async (req, res) => {
    const token = req.cookies.token
    const userEmail = JWT.verify(token, JWT_SECRET)

    const orderAddress = req.body.orderAddress

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString()
        },
        include: {
            Cart: true
        }
    })

    if (!user) {
        return res.send({
            error: "no user found"
        })
    }

    const cartItemsArr: {
        id: number;
        userId: number;
        productId: number;
        quantity: number;
    }[] = user.Cart

    const address = await prisma.address.create({
        data: {
            houseNo: orderAddress.houseNo,
            city: orderAddress.city,
            state: orderAddress.state,
            country: orderAddress.country,
            phone: orderAddress.phone,
            pin: parseInt(orderAddress.pin)
        }
    })

    cartItemsArr.map(async (item) => {

        const product = await prisma.product.findFirst({ where: { id: item.productId } })
        const producPrice = product?.price

        if (!producPrice) {
            return res.send({
                error: ''
            })
        }

        const orderValue = producPrice * item.quantity
        const order = await prisma.orderItem.create({
            data: {
                quantity: item.quantity,
                value: orderValue,
                cartItemId: item.id,
                addressId: address.id
            }
        })

        await prisma.cartItem.updateMany({
            where: {
                status: "ALIVE"
            },

            data: {
                status: 'DEAD'
            }
        })
    })

    return res.send({
        message: 'success'
    })
})

orderRouter.post('/myorders', async (req, res) => {
    const token = req.cookies.token
    const email = JWT.verify(token, JWT_SECRET)
    const user = await prisma.user.findFirst({
        where: {
            email: email.toString()
        },
        include: {
            Cart: true
        }
    })

    // const cartItems = user?.Cart

    const cartItems = await prisma.cartItem.findMany({
        where: {
            userId: user?.id,
            // status: 'ALIVE'
        }
    })

    const cartItemsArr: any = []

    if (cartItems && cartItems?.length > 0) {
        for (let i = 0; i < cartItems?.length; i++) {
            cartItemsArr.push(cartItems[i])
        }
    }

    const productItemsArr: any = []

    if (cartItemsArr && cartItemsArr.length > 0) {
        for (let i = 0; i < cartItemsArr.length; i++) {
            productItemsArr.push(
                await prisma.product.findFirst({
                    where: {
                        id: cartItemsArr[i].productId
                    }
                })
            )
        }
    }

    return res.send({
        orderDetails: cartItemsArr,
        productDetails: productItemsArr
    })



})