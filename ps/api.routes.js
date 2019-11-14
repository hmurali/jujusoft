const router = require("express").Router();

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
    }
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
    .get(function (req, res) {
        console.log('get /computer')
        res.json({})
    })
    .post(function (req, res) {
        const body = req.body
        console.log(body)
        console.log('post /computer')
        res.json({ body })
    })

router.route('/computer/:computerid')
    .get(function (req, res) {
        console.log('get /computer/:computerid')
        res.json({})
    })
    .put(function (req, res) {
        const body = req.body
        console.log(body)
        console.log('put /computer/:computerid')
        res.json({ body })
    })
    .delete(function (req, res) {
        console.log('delete /computer/:computerid')
        res.json({})
    })



module.exports = router;