import { Router } from "express";
import { prisma } from "database"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



export const signupRouter = Router()

// phone, email, naam, password, re enter password
signupRouter.post('/signup', async (req, res) => {
    const signupData = req.body

    const phone: number = signupData.phone
    const email = signupData.email
    const name = signupData.name
    const pass = signupData.pass
    const rePass = signupData.rePass

    if (pass !== rePass) {
        return res.send({
            error: "password doesn't match"
        })
    }

    bcrypt.hash(pass, 10)
        .then(async (hashedPass) => {
            await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    phone: phone.toString(),
                    hashedPass: hashedPass,
                    // role: 
                }
            })
        })
        .catch((err) => {
            return res.send({
                error: err
            })
        })

    return res.send({
        success: true
    })
})