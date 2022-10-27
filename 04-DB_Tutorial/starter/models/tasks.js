const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [true, "Please Provide Valid Credentials."],
        trim: true,
        maxLength: [20, "Name can not exceed than 20 characters."]
    },
    completion:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);


//Validators: Make object which will have properties that are actually the validators.