const Products = require("../model/storeSchema")

const getAllProducts = async (req, res, next) => {
    // try {
    //     const products = await Products.find()
    //     if (products) {
    //         return res.status(200).json({ products })
    //     }
    // } catch (err) {
    //     next(err)
    // }

    // throw new Error("Testing express-async-errors package.")

    // const products = await Products.find({ name: "vase table" })
    // This is static way, i.e the condition of search is given manually. We dont want this. The smarter way is the dynamic way, i.e. getting them through query string.

    // const products = await Products.find(req.query)
    //This is fine. But not a good approach. This can result to bug. If a param that does not exist in our database is provided, we will get empty result. (OLDER VERSION)
    // UPDATE
    //The strict is true by default, this means that the queries that does not exist in our schema gets ignored by default.
    //However, the robust method to do so is:

    const { featured, company } = req.query //We have to get only those strings that exist in our schema.
    const queryObject = {}

    // IMPORTANT - Query params are received as String. So, the featured received is String. So, it must be compared with a string like done above.

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    const products = await Products.find(queryObject)
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProducts }

/*

In previous projects, we have manually created aync Wrapper and used try-catch blocks for handling errors. 
We have a package for this same functionality - "express-async-errors"
Before, we have to use next() to forward the error to the error handler.
But, with this package, we just need to throw the error, so if error occured, it will throw the error and catched by the error handler like before, where we forwarded the error using next().
Useful Package.

*/
