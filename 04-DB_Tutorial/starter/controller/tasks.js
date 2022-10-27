const Task = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send("Get all tasks...")
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id})
}

const createTask = async (req, res) => {
   try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
   } catch (error) {
        res.status(500).json({error})
   }
}

const updateTask = (req,res) => {
    res.json({ id : req.params.id})
}

const deleteTask = (req, res) => {
    res.json({ id: req.params.id})
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}