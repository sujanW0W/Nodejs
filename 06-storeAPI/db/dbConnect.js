const mongoose = require("mongoose")

const dbConnect = (uri) => {
    return mongoose.connect(uri)
}

module.exports = dbConnect
