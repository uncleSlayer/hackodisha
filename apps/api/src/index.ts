import express from "express";
import { signupRouter } from "./routes/users/auth/signup";
import cors from 'cors'
import { loginRouter } from "./routes/users/auth/login";
import { productsRouter } from "./routes/vendors/products/upload";
import cookieParser from "cookie-parser"
import { productRouter } from "./routes/vendors/products/fetchProduct";
import { cartRouter } from "./routes/users/cart/cart";

const app = express()

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true // this is needed to allow cookies or auth headers
};


app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

app.use(signupRouter)
app.use(loginRouter)
app.use(productsRouter)
app.use(productRouter)
app.use(cartRouter)

app.listen(8000, () => console.log('listening on port 8000'))