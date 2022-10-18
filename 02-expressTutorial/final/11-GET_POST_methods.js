const express = require('express')
const app = express()

//staic files
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended : false}))

//parse json
app.use(express.json())

const {people} = require('./data')

app.get('/api/people', (req,res) => {
    res.status(200).json(people)
})

app.post('/login', (req,res) => {
    const {name} = req.body;
    if(name)
        res.status(200).send(`Welcome ${name}`);
    else
        res.status(401).send("Please provide Valid Credentials")
})

app.post('/login/js', (req, res) => {
    const {name} = req.body;
    if(name)
        return res.status(201).json({success: true, person: name})    
    
    return res.status(400).json({success: false, msg: "Please provide valid credentials"})
    
})

app.listen( 5000, () => {
    console.log("Server is listening on port 5000.....");
})


//In this part, I learnt different ways to recieve data from the frontend application using POST method.
//In traditional approach, i.e. recieving form data(when method = 'POST' and action = 'submit' is mentioned in the form), an express middleware, express.urlencoded() with extended: false is used, and we can simply read the payload in req.body

//In javacript approach, i.e. recieving json from a script, api is called(Remember, Content-type: application/json), we need to use a middleware, express.json(). Then, as in traditional approach, we can read payload from req.body
