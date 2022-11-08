//JWT Basics

require("dotenv")
require("express-async-errors")

const express = require("express")
const app = express()

const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

//DB
// const connectDB = require('./db/connectDB')

//routes
const route = require("./routes/route")

//middlewares
app.use(express.json())
app.use(express.static("./public"))

app.use("/api/v1", route)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        // await connectDB(process.env.URI)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log("ERROR")
    }
}

start()
