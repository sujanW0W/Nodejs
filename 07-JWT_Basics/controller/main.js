const { BadRequest } = require("../errors")
const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

const login = (req, res) => {
    const { userName, password } = req.body

    //Check the details if they are empty
    if (!userName || !password) {
        throw new BadRequest("Please provide Valid Credentials")
    }

    //During production, Secret string must be long, complex and unpredictable.

    const id = Math.floor(Math.random() * 100)
    const token = jwt.sign({ id, userName }, process.env.JWT_Secret, {
        expiresIn: "30d",
    })

    res.status(StatusCodes.CREATED).json({ msg: "User Created.", token })
}

const dashboard = (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(StatusCodes.OK).json({
        msg: `Welcome to the Dashboard, ${req.user.userName}. The random number is ${randomNumber}`,
    })
}

module.exports = { login, dashboard }
