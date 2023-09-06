import { Router } from "express";
import { prisma } from "database";
import { ProductCategory } from "@prisma/client"
import { array } from "zod";


export const productRouter = Router()

productRouter.post('/products/all/:category', async (req, res) => {
    const category = req.params.category
    const lastItemId = req.body.lastItem


    let cat;
    switch (category) {

        case 'Pottery':
            cat = ProductCategory.Pottery
            break;

        case 'Utensils':
            cat = ProductCategory.Utensils
            break;

        case 'Accessories':
            cat = ProductCategory.Accessories
            break;

        case 'Jewellery':
            cat = ProductCategory.Jewellery
            break;

        case 'Other_Sculptures':
            cat = ProductCategory.Other_Sculptures
            break;

        case 'Wooden_Sculptures':
            cat = ProductCategory.Wooden_Sculptures
            break;

        case 'Metal_Sculptures':
            cat = ProductCategory.Metal_Sculptures
            break;

        case 'Silk_rug':
            cat = ProductCategory.Silk_rug
            break;

        case 'Cotton':
            cat = ProductCategory.Cotton
            break;

        case 'Khadi':
            cat = ProductCategory.Khadi
            break;

        case 'Pashmina_Shawl':
            cat = ProductCategory.Pashmina_Shawl
            break;

        case 'Kashmiri_Saree':
            cat = ProductCategory.Kashmiri_Saree
            break;

        case 'Silk_Saree':
            cat = ProductCategory.Silk_Saree
            break;

        case 'Banarasi_Saree':
            cat = ProductCategory.Banarasi_Saree
            break;

        case 'Sambalpuri_Saree':
            cat = ProductCategory.Sambalpuri_Saree
            break;

        case 'Other':
            cat = ProductCategory.Other
            break;

        case 'Other_rug':
            cat = ProductCategory.Other_rug
            break;

        case 'Porcelain_HomeDecor':
            cat = ProductCategory.Porcelain_HomeDecor
            break;

        case 'Metal_HomeDecor':
            cat = ProductCategory.Metal_HomeDecor
            break;

        case 'Wooden_HomeDecor':
            cat = ProductCategory.Wooden_HomeDecor
            break;

        case 'Other_HomeDecor':
            cat = ProductCategory.Other_HomeDecor
            break;

        case 'Porcelain_Sculptures':
            cat = ProductCategory.Porcelain_Sculptures
            break;

        case 'Cotton_rug':
            cat = ProductCategory.Cotton_rug
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
    products: products
})

})