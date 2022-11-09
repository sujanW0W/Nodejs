const express = require("express")
const router = express.Router()

const userAuthorization = require("../middlewares/auth")

const { login, dashboard } = require("../controller/main")

router.post("/login", login)

router.get("/dashboard", userAuthorization, dashboard)

module.exports = router
