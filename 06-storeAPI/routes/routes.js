const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Products</a>')
})

module.exports = router
