const express = require("express")
const router = express.Router()

const { login, dashboard } = require("../controller/main")

router.post("/login", login)

router.get("/dashboard", dashboard)

module.exports = router
