const Computer = require('../models/computer')


// ComputerService
const computerservice = {
    list: function (req, res) {
        res.json({})
    },
    create: function (req, res) {
        const body = req.body
        const comp = new Computer(req.body)
        comp.save()
            .then(savedComp => {
                res.json(savedComp)
            })
            .catch(err => {
                res.send(err)
            })
    },
    read: function (req, res) {
        Computer.findOne({ _id: req.params.computerid })
            .then(comp => {
                res.json(comp)
            })
            .catch(err => {
                res.send(err)
            })
    },
    update: function (req, res) {
        const body = req.body
        res.json({ body })
    },
    delete: function (req, res) {
        Computer.deleteOne({ _id: req.params.computerid })
            .then(response => {
                res.json(response)
            })
    },
}

module.exports = computerservice