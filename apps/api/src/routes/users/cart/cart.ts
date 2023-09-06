import { Router } from "express";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "configs"
import { prisma } from "database";

export const cartRouter = Router()

cartRouter.post('/cart', async (req, res) => {
    const productId: number = req.body.id
    const quantity:number = req.body.quantity

    const token = req.cookies.token
    const email = JWT.verify(token, JWT_SECRET)

    const user = await prisma.user.findFirst({
        where: {
            email: email.toString()
        }
    })

    if (!user) {
        return res.send({
            error: "user not found"
        })
    }

    if (typeof user.id !== 'number') {
        return res.send({
            error: 'incorrect userid type'
        })
    }

    if (user.role === 'VENDOR') {
        return res.send({
            error: "user ban k aa lawde"
        })
    }

    const product = await prisma.product.findFirst({
        where: {
            id: productId
        }
    })

    if (typeof product?.id !== 'number') {
        return res.send({
            error: 'incorrect product id type'
        })
    }

    const cartItem = await prisma.cartItem.create({
        data: {
            userId: user.id,
            productId: product.id,
            quantity: quantity
        }
    })

    return res.send({
        message: `cart with cart id: ${cartItem.id} created`
    })

})