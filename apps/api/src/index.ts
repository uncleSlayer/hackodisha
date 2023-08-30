import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send({ message: 'root' })
})

app.get('/hello', (req, res) => {
    res.send({ message: 'hello' })
})

app.listen(8000, () => console.log('listening on port 8000'))