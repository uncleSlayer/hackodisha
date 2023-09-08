import { Router } from "express";
import { prisma } from "database"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginRouter = Router()
const JWT_SECRET = 'hsdfsifshf'

loginRouter.post('/login', async (req, res) => {
    const reqBody = req.body

    const email = reqBody.email
    const pass = reqBody.pass

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (!user) {
        return res.send({
            error: `user of email: ${email} does not exist`
        })
    }

    bcrypt.compare(pass, user.hashedPass)
        .then((resp) => {
            console.log(resp)
            if (!resp) {
                return res.send({
                    error: " You have entered incorred password"
                })
            }
            jwt.sign(
                email,
                JWT_SECRET,
                {
                    algorithm: 'HS256'
                },
                (err, token) => {
                    if (err) {
                        return res.send({
                            error: err
                        })
                    }

                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 500 * 60 * 1000
                    })

                    return res.send({
                        email: user.email,
                        role: user.role
                    })
                }
            )
        })
        .catch((error) => {
            return res.send({
                error: error
            })
        })

})