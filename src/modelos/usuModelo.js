const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    usuario: {
        type: "string",
        unique: true,
        required: true,
        max: 100
    },
    password: {
        type: "string",
        required: true
    },
});

module.exports = mongoose.model("users",userSchema)
