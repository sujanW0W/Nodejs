//use() middleware

const express = require('express')
const app = express();
const logger = require('./logger')

app.use('/api',logger)

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
    res.send("Items")
})

app.listen( 5000, () => {
    console.log("Server is running on port 5000.....")
})

//Like in previous file, the logger is included in the same file as the api.
//If the middleware can be kept in separate file, it would be cleaner.

//We simply created a different file that consist of logger function and exported. 
//The module will be imported in this file and used it using the middleware use().

//One approach is writing logger in the get method like before.
//But if we have like large api, it is not a good approach.
//With the help of use(), it can be omitted.

//As the use() method with the function in it will execute the function, we do not need to write the function in the invocation.

//Now, the order of the use() matters. If a get method for 'home' is placed before the use(), that particular get method will not invoke the use method.(As we know, the files are executed in top-bottom fashion.)

//The use() can take the path as well. If the use() gets the path, it adds the path to every api calls.
//Like in above, we have placed '/api' as path. By default the path is '/'
//The path is checked with the path in url, it the path matches, then the middleware is executed, otherwise not.
//Eg, in about, the url with '/api' only invokes the use method.