//express basics

//Express makes the job really simple.
//By the help of different methods, express handles many jobs that were supposed to be done manually.
//With express, we dont need to explicitly include status, content-type, static files or resources, etc.

const express = require('express')
const app = express();

//GET method
app.get('/', (req,res)=>{
    res.send("Home Page.")
})

app.get('/about', (req,res)=>{
    res.status(200).send("About Page")
})

//ALL method - for all the request that are not satisfies by above methods.
app.all('*', (req,res) => {
    res.status(404).send("Resource Not Found.");
})


app.listen( 5000, ()=>{
    console.log("Server is running on port 5000")
})