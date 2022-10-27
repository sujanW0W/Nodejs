const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }
}

const getSingleTask = async (req, res) => {
   try {
        const {id: taskID} = req.params;
        const task = await Task.findById(taskID)

        if(!task)
            return res.status(404).json({ msg: `Can not find task with id: ${taskID}`})

        res.status(200).json({task})
   } catch (error) {
        res.status(500).json({error})
   }
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