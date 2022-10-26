//console.log("Frontend Application")

const express = require('express')
const app = express();

//middleware
app.use(express.json())

const connectDB = require('./DB/connect')

require('dotenv').config()


//routes

const tasks = require('./routes/tasks');

app.use('/api/v1/tasks', tasks)


const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);

        app.listen( port, () => {
            console.log(`Server is running on port ${port}.....`);
        })
    }
    catch(err){
        console.log("ERROR")
    }
}

start()

