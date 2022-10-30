const Task = require('../models/tasks')

const asyncWrapper = require('../middleware/asyncWrapper')

const {createCustomError} = require('../error/customError')

const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks})

        // res.status(200).json({tasks, nbHits: tasks.length})

        // res
        //     .status(200)
        //     .json({ success: true, data: {tasks, nbHits: tasks.length}})

        // response can be set in different ways. Just be consistent with the one that you prefer. 
})

const getSingleTask = asyncWrapper( async (req, res, next) => {
        const {id: taskID} = req.params;
        const task = await Task.findById(taskID)

        if(!task)
            return next(createCustomError(`Can not find task with id: ${taskID}`, 404))

        res.status(200).json({task})
})

const createTask = asyncWrapper (async (req, res) => {
   
        const task = await Task.create(req.body)
        res.status(201).json({task})
  
})

const updateTask = asyncWrapper( async (req,res) => {
        const {id: taskID} = req.params
        const task = await Task.findByIdAndUpdate(taskID, req.body,{
            new: true,
            runValidators: true
        })

        if(!task)
        return next(createCustomError(`Can not find task with id: ${taskID}`, 404))

})

const deleteTask = asyncWrapper( async (req, res) => {
        const {id: taskID} = req.params;
        const task = await Task.findByIdAndDelete(taskID);

        if(!task)
        return next(createCustomError(`Can not find task with id: ${taskID}`, 404))

        res.status(200).json({task})
   
})


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}