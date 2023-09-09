import { Router } from "express";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "configs"
import { prisma } from "database";

export const cartRouter = Router()

cartRouter.post('/cart', async (req, res) => {

    const productId: number = req.body.id
   


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

    const cart = await prisma.cartItem.findFirst({
        where:{
            productId:product?.id
        }
    })

    if(cart){
        await prisma.cartItem.update({
            where:{
                id: cart.id
            },
            data: {
                quantity: cart.quantity+1
            }
            
        })

        return res.send({
            message: "Item added to cart"
        }) 
    }

    if (typeof product?.id !== 'number') {
        return res.send({
            error: 'incorrect product id type'
        })
    }

    const cartItem = await prisma.cartItem.create({
        data: {
            userId: user.id,
            productId: product.id,
            price: product.price,
            quantity: 1
        }
    })

    return res.send({
        message: `cart with cart id: ${cartItem.id} created`,
        data: cartItem
    })

})