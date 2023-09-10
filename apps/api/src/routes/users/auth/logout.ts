import { Router } from "express";

export const logoutRouter = Router()

logoutRouter.post('/logout', (req, res) => {
    res.clearCookie('token')

    return res.send({
        message: 'loggedout '
    })
})