
//UserService
const userservice = {
    list: function (req, res) {
        console.log('get /users')
        res.json({})
    },
    create: function (req, res) {
        const body = req.body
        console.log(body)
        console.log('get /users')
        res.json({ body })
    },
    read: function (req, res) {
        console.log('get /users/:userid', req.params.userid)
        res.json({})
    },
    update: function (req, res) {
        const body = req.body
        console.log(body)
        console.log('put /users/:userid', req.params.userid)
        res.json({ body })
    },
    delete: function (req, res) {
        console.log('delete /users/:userid', req.params.userid)
        res.json({})
    },
}

module.exports = userservice