const express = require('express')
const router = express.Router();

const {getAllTasks, getSingleTask, createTask, updateTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getSingleTask)

router.route('/:id').post(createTask).put(updateTask).delete(deleteTask)


module.exports = router;