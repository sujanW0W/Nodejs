require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const dbConnect = require("./db/dbConnect")

const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.json())

//routes

const route = require("./routes/routes")
const apiRoute = require("./routes/apiRoutes")
app.use("/", route)
app.use("/api/v1/products", apiRoute)

app.use(notFound)
app.use(errorHandler)

//DB connect & listen...

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await dbConnect(process.env.MONGO_URI)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}.....`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()
