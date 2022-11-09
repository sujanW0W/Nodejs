const { UnAuthorized } = require("../errors")
const jwt = require("jsonwebtoken")

const userAuthorization = (req, res, next) => {
    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith("Bearer ")) {
        throw new UnAuthorized("Fault in Authorization Token.")
    }

    const token = authToken.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_Secret)
        const { userName } = decoded

        req.user = { userName }
        next()
    } catch (error) {
        throw new UnAuthorized(
            "You dont have the authorization for this route.",
            401
        )
    }
}

module.exports = userAuthorization
