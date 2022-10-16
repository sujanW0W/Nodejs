//Multiple middleware

const express = require('express')
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger]) //if multiple modules in use(), array should be used.

app.get('/', (req,res) => {
    res.send("Home")
})

app.get('/about', (req,res) => {
    res.send("About")
})
app.get('/api/products', (req,res) => {
    res.send("Products")
})
app.get('/api/items', (req,res) => {

    console.log(req.user)
    
    res.send("Items")
})

app.listen( 5000, () => {
    console.log("Server is running on port 5000.....")
})
