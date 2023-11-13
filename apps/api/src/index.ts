import express from "express";
import { signupRouter } from "./routes/users/auth/signup";
import cors from 'cors'
import { loginRouter } from "./routes/users/auth/login";
import { productsRouter } from "./routes/vendors/products/upload";
import cookieParser from "cookie-parser"
import { productRouter } from "./routes/vendors/products/fetchProduct";
import { cartRouter } from "./routes/users/cart/cart";
import { fetchCart } from './routes/users/cart/fetchCart'

import { orderRouter } from "./routes/users/order/order";
import { stripeRouter } from "./routes/users/order/stripe";
import { logoutRouter } from "./routes/users/auth/logout";
import { vendorUserRouter } from "./routes/vendors/user/user";


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
app.use(stripeRouter)
app.use(logoutRouter)
app.use(vendorUserRouter)

app.use(fetchCart)

app.use(orderRouter)


// This code backsup data prom database to json file
// import { prisma } from "database";
// const fs = require('fs');
// const path = require('path')
// app.get('/exportAddress', async (req, res) => {
//     try {
//       // Replace 'your_table' with the name of your PostgreSQL table
      
  
//       // Fetch data from PostgreSQL
//       const data = await prisma.address.findMany();
  
//       // Specify the file path and name
//       const filePath = path.join(__dirname, 'exportedAddress.json')
  
//       // Write data to the file
//       fs.writeFileSync(filePath, JSON.stringify(data));
  
//       // Send a success response
//       res.status(200).json({ message: 'Data exported successfully' });
//     } catch (error) {
//       console.error('Error exporting data:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });


app.listen(8000, () => console.log('listening on port 8000'))