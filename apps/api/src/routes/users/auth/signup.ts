import { Router } from "express";
import { prisma } from "database"

export const signupRouter = Router()

// phone, email, naam, password, re enter password 

signupRouter.post('/signup', async (req, res) => {
    const signupData = req.body

    const phone: number = signupData.phone
    const email = signupData.email
    const name = signupData.name
    const pass = signupData.pass
    const rePass = signupData.rePass

    await prisma.user.create({
        data: {
            email: 'hh',
            name: 'kk',
            phone: 'kk',
            hashedPass: ''
        }
    })

    return res.send({
        success: true
    })
})