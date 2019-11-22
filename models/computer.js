const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const computerSchema = new Schema({
    ipAddress: { type: String, required: true },
    computerName: { type: String, required: false }
});

const Computer = mongoose.model("Computer", computerSchema);

module.exports = Computer;