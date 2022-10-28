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

const updateTask = async (req,res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findByIdAndUpdate(taskID, req.body,{
            new: true,
            runValidators: true
        })

        if(!task)
            return res.status(404).json({ msg: `Can not find task with id: ${taskID}`})

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findByIdAndDelete(taskID);

        if(!task)
            return res.status(404).json({ msg: `Can not find task with id: ${taskID}`})

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}