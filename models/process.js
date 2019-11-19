const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processSchema = new Schema({
    canPauseAndContinue: { type: Boolean, required: true },
    canShutDown: { type: Boolean, required: true },
    canStop: { type: Boolean, required: true },
    displayName: { type: String, required: true },
    dependentServices: [{ type: String }],
    machineName: { type: String, required: true },
    serviceName: { type: String, required: true },
    servicesDependedOn: [{ type: String }],
    serviceHandle: { type: String, default: null, required: true },
    status: { type: Number, required: true },
    serviceType: { type: Number, required: true },
    startType: { type: Number, required: true },
    site: { type: String, default: null, required: true },
    container: { type: String, default: null, required: true },
    name: { type: String, required: true },
    requiredServices: [{ type: String }]
});

const Process = mongoose.model("Process", processSchema);

module.exports = Process;