import express from "express";
import { signupRouter } from "./routes/users/auth/signup";

const app = express()

app.use(signupRouter)

app.listen(8000, () => console.log('listening on port 8000'))