const express = require("express")
const router = express.Router()

const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} = require("../controller/tasks")

const userAuthorization = require("../middleware/auth")

router.get("/:userID", userAuthorization, getAllTasks)

router.post("/", createTask)

router.patch("/:id", updateTask)

router.delete("/:id", deleteTask)

module.exports = router
