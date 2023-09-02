import { z } from "zod"

// const productInfo: {
//         name: string,
//         category: 'DUMMY' | 'DUMMY2' | 'DUMMY3',
//         price: number,
//         description: string,
//         quantity: number
//     } = req.body.productData

export const productUploadValidator = z.object({
    name: z.string(),
    category: z.string(),
    price: z.number(),
    description: z.string(),
    quantity: z.number()
})