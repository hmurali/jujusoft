const router = require("express").Router();

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
    delete:function (req, res) {
        console.log('delete /computer/:computerid')
        res.json({})
    },
}

//Routes
router.route('/users')
    .get(userservice.list)
    .post(userservice.create)

router.route('/users/:userid')
    .get(userservice.read)
    .put(userservice.update)
    .delete(userservice.delete)

router.route('/computer')
    .get(computerservice.list)
    .post(computerservice.create)

router.route('/computer/:computerid')
    .get(computerservice.read)
    .put(computerservice.update)
    .delete(computerservice.delete)



module.exports = router;