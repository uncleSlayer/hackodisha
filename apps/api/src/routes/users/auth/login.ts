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
                        maxAge: 5 * 60 * 1000
                    })

                    return res.send({
                        messsage: 'user logged in succesfully'
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