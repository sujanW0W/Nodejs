const mongo_URI = "mongodb+srv://sujanW0W:Aoc9H2bdEVeqALAJ@nodeprojects.t1xaot0.mongodb.net/Todo?retryWrites=true&w=majority"

const connect = (mongo_URI) => {
    mongoose.connect(mongo_URI)
}

module.exports = connect