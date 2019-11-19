
// ComputerService
const computerservice = {
    list: function (req, res) {
        console.log('get /computer')
        res.json({})
    },
    create: function (req, res) {
        const body = req.body
        console.log(body)
        console.log('post /computer')
        res.json({ body })
    },
    read: function (req, res) {
        console.log('get /computer/:computerid')
        res.json({})
    },
    update: function (req, res) {
        const body = req.body
        console.log(body)
        console.log('put /computer/:computerid')
        res.json({ body })
    },
    delete: function (req, res) {
        console.log('delete /computer/:computerid')
        res.json({})
    },
}

module.exports = computerservice