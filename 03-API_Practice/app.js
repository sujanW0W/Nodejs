const express = require('express')
const app = express();

app.use(express.static('./public'))

app.use(express.urlencoded( {extended: false}))
app.use(express.json())

const userRouter = require('./routes/usersRoutes')

app.use('/api/users', userRouter);

app.listen( 5000, () => {
    console.log("Server is running on port 5000.....");
})