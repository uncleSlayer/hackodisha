import { Router } from "express";

export const signupRouter = Router()

signupRouter.post('/signup', (req, res) => {
    return res.send({
        message: 'hi'
    })
})