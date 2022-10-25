const getAllTasks = (req, res) => {
    res.send("Get all tasks...")
}

const getSingleTask = (req, res) => {
    res.send("Get single task")
}

const createTask = (req, res) => {
    res.send("Create Task")
}

const updateTask = (req,res) => {
    res.send("Update Task")
}

const deleteTask = (req, res) => {
    res.send("Delete Task")
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}