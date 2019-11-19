const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
    ip: { type: String, required: true },
    name: { type: String, required: false }
});

const Computer = mongoose.model("Computer", computerSchema);

module.exports = Computer;