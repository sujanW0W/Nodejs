const mongoose = require("mongoose")

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided."],
        trim: true,
        maxLength: [
            20,
            "The name of the product can not exceed than 20 characters",
        ],
    },

    price: {
        type: Number,
        required: [true, "Price must be provided."],
        trim: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 2.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        // enum: ["ikea", "liddy", "caressa", "marcos"]
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported",
        },
    },
})

module.exports = mongoose.model("Products", StoreSchema)
