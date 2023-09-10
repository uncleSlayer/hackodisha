import { JWT_SECRET } from "configs";
import { prisma } from "database";
import { Router } from "express";
import JWT from "jsonwebtoken"
export const vendorUserRouter = Router()

vendorUserRouter.get('/vendor', async (req, res) => {
    const token = req.cookies.token
    const userEmail = JWT.verify(token, JWT_SECRET)

    if (!userEmail) {
        return res.send({
            message: 'incorrect details'
        })
    }

    const vendor = await prisma.user.findFirst({
        where: {
            email: userEmail.toString(),
            role: 'VENDOR'
        },

        include: {
            Product: true
        }
    })

    if (!vendor) {
        return res.send({
            message: 'tu hai kya vendor hai tu?? bata hai tu? kyu karra fir vendor login??'
        })
    }

    return res.send({
        vendor: vendor,

    })
})
