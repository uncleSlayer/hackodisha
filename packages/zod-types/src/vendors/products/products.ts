import { z } from "zod"
import { ProductCategory } from "@prisma/client"

export const productUploadValidator = z.object({
    name: z.string(),
    category: z.nativeEnum(ProductCategory),
    price: z.number(),
    description: z.string(),
    quantity: z.number()
})