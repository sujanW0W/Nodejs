//Middleware

const express = require('express')
const app = express();

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method,url,date)

    next();
    
    // res.send("Termination")
}

app.get('/', logger, (req,res) => {
/*
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method,url,date)
*/
    res.send("Home")
})

app.get('/about', (req,res) => {
    res.send("About")
})

app.listen( 5000, () => {
    console.log("Server is listening on port 5000......")
})

//If there is some block of codes that is to be executed for many different requests, it is not a good approach to hard-code it in every other functions.
//Here comes the use of "Middleware".


//Basically, middleware is a function that is executed after a client request and before the response. Hence, the name middleware as it is executed in the middle of request and response.
//The syntax is as above.
//the parameters must be written in the function definition. But, it is not required to write them during invocation, as Express will handle them.


//While using middleware, the next is Crucial, MUST be used everytime.
//the next() will make the codes in the api function to be executed.
//Like in above, if next() is not written, then the page does not load because the browser will recieve nothing as the res.send() in get is not executed. So, next() is Absolutely Mandatory.

//If there is nothing after that particular middleware function, then res.send() can be done.