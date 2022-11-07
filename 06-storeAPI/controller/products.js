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

    const { featured, company, name, sort, field, numericFilters } = req.query //We have to get only those strings that exist in our schema.
    const queryObject = {}

    // IMPORTANT - Query params are received as String. So, the featured received is String. So, it must be compared with a string like done above.

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    if (numericFilters) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte",
        }

        const regEx = /\b(<|<=|=|>|>=)\b/g

        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )

        filters = filters.split(",")

        const options = ["price", "rating"]

        filters.forEach((item) => {
            const [field, operator, value] = item.split("-")

            if (options.includes(field)) {
                if (field in queryObject) {
                    queryObject[field][operator] = Number(value)
                    return //Equivalent to continue in for loop.
                }

                queryObject[field] = { [operator]: Number(value) }
            }
        })
    }
    console.log(queryObject)
    // const products = await Products.find(queryObject)

    //Sorting is done. If specific field for sorting is provided, then that particular field will be used for sorting, else sorting will be done based on creation time(cratedAt).
    //Since the sort() should be chained with the find() request, if await is done during find(), then the functionality wont work.
    //This is because, if waited for the find() to be completed, we will wait for the result of the find operation. After getting the result of the find() operation, sort() will not work because it is not chained.
    //So, in order to make sort() work, we have to chain the sort() before the find() is completed.
    //For this, We will not awati for the find() and chain the sort() with the find, before it gets completed. We can await for the  result not while finding but while waiting for the sorted result.

    let result = Products.find(queryObject)
    if (sort) {
        //In URL, if there are multiple sorting fields, then they are provided by separating with comma.
        //But in sort(), they must be provided by separating with empty space. So, we need to replace comma with an empty space.

        let sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    } else {
        result = result.sort("createdAt")
    }

    //Selecting some specific fields only. select()
    if (field) {
        let fieldList = field.split(",").join(" ")
        result = result.select(fieldList)
    }

    //Pagination

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    let skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)

    const products = await result

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
