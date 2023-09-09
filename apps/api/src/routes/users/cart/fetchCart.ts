import { Router } from "express";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "configs"
import { prisma } from "database";
import { log } from "console";

export const fetchCart = Router()

fetchCart.post('/fetchcarts', async (req, res) => {
    const token = req.cookies.token
    const userEmail = JWT.verify(token, JWT_SECRET)

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString()
        }
    })

    const cartItems = await prisma.cartItem.findMany({
        where: {
            status: "ALIVE",
            userId: user?.id
        }
    })

    if (!cartItems) {
        return res.send({
            error: "Unndefined cartItem"
        })
    }

    const sendUserArr: {
        id: number,
        name: string,
        price: number,
        quantity: number,
        productId: number,
        imageUrl: string
    }[] = []

    await Promise.all(cartItems.map(async (item) => {
        const product = await prisma.product.findFirst({ where: { id: item.productId } })
        if (!product) {
            return
        }

        const sendUser = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            productId: 0,
            imageUrl: ''
        }

        sendUser.id = item.id
        sendUser.name = product.name
        sendUser.price = item.price
        sendUser.productId = item.productId
        sendUser.quantity = item.quantity
        sendUser.imageUrl = product.imageUrl
        sendUserArr.push(sendUser)
    }))

    return res.send({
        message: "Ye lo carItems",
        shoppingCart: sendUserArr
    })
})

