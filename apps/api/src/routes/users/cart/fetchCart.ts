import { Router } from "express";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "configs"
import { CartItem } from "@prisma/client";
import { prisma } from "database";

export const fetchCart = Router()

fetchCart.post('/fetchcarts',async(req,res)=>{
    const cartItems = await prisma.cartItem.findMany({
        where:{
            status: "ALIVE"
        }
    })
    if(!cartItems){
        return res.send({
            error: "Unndefined cartItem"
        })
    }
    return res.send({
        message: "Ye lo carItems",
        shoppingCart: cartItems
    })
})

