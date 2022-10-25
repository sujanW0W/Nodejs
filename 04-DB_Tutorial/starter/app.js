//console.log("Frontend Application")

const express = require('express')
const app = express();

//middleware
app.use(express.json())

//routes

const tasks = require('./routes/tasks');

app.use('/api/v1/tasks', tasks)


const port = 3000;
app.listen( port, () => {
    console.log(`Server is running on port ${port}.....`);
})