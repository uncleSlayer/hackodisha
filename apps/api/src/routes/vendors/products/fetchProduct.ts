import { Router } from "express";
import { prisma } from "database";
import { ProductCategory } from "@prisma/client"
import { array } from "zod";


export const productRouter = Router()

productRouter.post('/products/all/:category', async (req, res) => {
    const category = req.params.category
    const lastItemId = req.body.lastItem

    let cat;

//     import { ProductCategory } from "@prisma/client";
    const categories = Object.values(ProductCategory); // returns an array of strings

    switch (category) {

        case 'DUMMY':
            cat = ProductCategory.Jewellery
            break;

        case 'DUMMY2':
            cat = ProductCategory.Jewellery
            break;

        case 'DUMMY3':
            cat = ProductCategory.Jewellery
            break;
    }

    const products = await prisma.product.findMany({
        where: {
            id: {
                gt: lastItemId
            },
            category: cat
        },
        take: 10
    })

    return res.send({
        message: 'lo bhai products',
        products:products
    })

})