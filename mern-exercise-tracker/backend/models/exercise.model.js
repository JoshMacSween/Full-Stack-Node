const mongoose = require('mongoose'); // Erase if already required

const Schema = mongoose.Schema
// Declare the Schema of the Mongo model
const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema)

//Export the model
module.exports = Exercise