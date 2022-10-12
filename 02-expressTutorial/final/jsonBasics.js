const express = require('express')
const app = express();

const data = require('./data')

app.get('/', (req,res) => {
    // res.json([
    //     {name: "Sujan"},
    //     {id: 37}
    // ])
    res.json(data)
})

app.listen( 5000, () => {
    console.log("Server is listening on port 5000.....");
    console.log(data)
})