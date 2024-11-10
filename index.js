const express = require('express')
const cors = require('cors')
const productsController = require('./product/controller')
const PORT = 5000;

const app = express();

app.use(
    cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,PUT",
    allowedHeaders: "Content-type"
    })
)
app.use(express.json())

// Routes
app.use('/product', productsController);


app.listen(PORT, () => console.log(`listing in port ${PORT}`))