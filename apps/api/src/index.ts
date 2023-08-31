import express from "express";
import { signupRouter } from "./routes/users/auth/signup";
import cors from 'cors'

const app = express()

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true // this is needed to allow cookies or auth headers
};


app.use(cors())
app.use(express.json())

app.use(signupRouter)

app.listen(8000, () => console.log('listening on port 8000'))