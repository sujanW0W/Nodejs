const express = require('express')
const app = express();
const path = require('path')

//USE method - setup static and middleware - Staric assets (Check below)
app.use(express.static('./public')) 
//This use method and by the use of express.static(), all the static files in the given folder(usually 'public') gets sent to the client.
//Before in http module, we had to send all the static files or resources like .js, .css, etc. manually like index.html.
//With the help of this use method, all the resources included in the given folder gets imported by the browser implicitly. Word simplified.

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*', (req,res) => {
    res.status(404).send('Resource Not Found.')
})


app.listen(5000, () => {
    console.log("Server is listening to port 5000.....")
})

/*
    Static assets are those files that server does not change or manipulate.
    Examples of static assets are images,styles,js.
    If we try to handle static assests like in http modules style, we will have to manually make functions to return the files.
    This becomes problem when there are like 2K images.
    So, during this, we can simply setup middleware, where express handles all the tasks.
    Simply, all the static assests can be dumped into a folder and by the help of 'use' method, all those files can be accessed. Express handles it all.
*/