const express = require('express')
const app = express()

app.use(express.json())

const {tasks} = require('./routes/tasks')

app.use('/api/v1/tasks', tasks)

const tasksDB = require('./DB/connect')


const port = process.env.PORT || 5000
app.listen( port, () => {
    console.log(`Server is running on port ${port}.....`);
})