const getAllTasks = (req, res) => {
    res.send("Get all tasks...")
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
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