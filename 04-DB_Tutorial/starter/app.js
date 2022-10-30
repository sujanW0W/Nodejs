//console.log("Frontend Application")

const express = require('express')
const app = express();

//Frontend
app.use(express.static('./public'))

//middleware
app.use(express.json())

const connectDB = require('./DB/connect')

require('dotenv').config()


//routes

const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

app.use('/api/v1/tasks', tasks)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 3000; //Basically, this checks the environment variable named PORT, if found use that particular port else use 3000.
//This is done in production phase. For example, the computer may be executing multiple applications and in this case, its better to check for the available port.

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        
        app.listen( port, () => {
            console.log(`Server is running on port ${port}.....`);
        })
    }
    catch(err){
        console.log("ERROR")
    }
}

start()

