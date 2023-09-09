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

cartRouter.post('/cart/delete', async (req, res) => {
    const cartItemId = req.body.id
    const token = req.cookies.token

    const userEmail = JWT.verify(token, JWT_SECRET)

    if (!userEmail) {
        return res.send({
            error: 'user not found'
        })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString()
        }
    })

    console.log(user, cartItemId);


    await prisma.cartItem.delete({
        where: {
            id: cartItemId,
            userId: user?.id
        },

    })

    return res.send({
        message: 'cart item deleted'
    })
})

cartRouter.post('/cart/remove', async (req, res) => {
    const itemId = req.body.itemId
    const token = req.cookies.token

    const userEmail = JWT.verify(token, JWT_SECRET)

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString()
        }
    })

    const cartItem = await prisma.cartItem.findFirst({
        where: {
            id: itemId
        }
    })

    if (!cartItem) {
        return res.send({
            error: 'cart item not found'
        })
    }

    if (!user) {
        return res.send({
            message: 'user not found'
        })
    }

    if(cartItem.quantity == 1){
        await prisma.cartItem.delete({
            where: {
                id: cartItem.id,
                userId: user?.id
            },
    
        })

        return res.send({
            message: 'remove one item from cart'
        })
    }

    await prisma.cartItem.update({
        where: {
            cartUser: user,
            id: itemId
        },

        data: {
            quantity: cartItem?.quantity - 1
        }
    })

    return res.send({
        message: 'remove one item from cart'
    })
})