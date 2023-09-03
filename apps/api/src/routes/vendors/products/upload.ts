import { prisma } from "database";
import { Router } from "express";
import jwt from "jsonwebtoken"
import { productUploadValidator } from "zod-types";
import { productUploadType } from "type-checks"

export const productsRouter = Router()

productsRouter.post('/product/upload', async (req, res) => {

    const productInfo: productUploadType = req.body.productData

    const productUploadValidated = productUploadValidator.safeParse(productInfo)

    if (!productUploadValidated.success) {
        return res.send({
            error: productUploadValidated.error
        })
    }

    const token = req.cookies.token

    const email = jwt.verify(token, 'hsdfsifshf')

    const loggedUser = await prisma.user.findFirst({
        where: {
            email: email.toString()
        }
    })

    if (loggedUser?.role !== 'VENDOR') {
        return res.send({
            error: 'user is not a vendor'
        })
    }

    const product = await prisma.product.create({
        data: {
            name: productInfo.name,
            category: productInfo.category,
            description: productInfo.description,
            price: productInfo.price,
            quantity: productInfo.quantity,
            userId: loggedUser.id
        }
    })

    return res.send({
        message: 'hello'
    })
})