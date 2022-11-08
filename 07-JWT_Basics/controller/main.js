const login = (req, res) => {
    const { userName, password } = req.body

    res.status(201).json({ success: true, msg: { userName, password } })
}

const dashboard = (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Welcome to the Dashboard, Sujan. The random number is ${randomNumber}`,
    })
}

module.exports = { login, dashboard }
