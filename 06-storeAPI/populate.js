require("dotenv").config()

const connectDB = require("./db/dbConnect")
const Products = require("./model/storeSchema")
const jsonProducts = require("./products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        //Optional - Clear the collection.
        await Products.deleteMany()

        //Create all the products.
        await Products.create(jsonProducts)

        console.log("Success")

        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
