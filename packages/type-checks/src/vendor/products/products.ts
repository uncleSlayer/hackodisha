import { productUploadValidator } from "zod-types"
import { z } from "zod"

export type productUploadType = z.infer<typeof productUploadValidator>