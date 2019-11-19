const User = require('../models/user')


//UserService
const userservice = {
    list: function (req, res) {
        res.json({})
    },
    create: function (req, res) {
        const body = req.body
        const user = new User
        (req.body)
        user.save()
            .then(savedUser => {
                res.json(savedUser)
            })
            .catch(err => {
                res.send(err)
            })
    },
    read: function (req, res) {
        User.findOne({_id:
        req.params.userid })
            .then(user => {
                res.json(user)
            }) 
            .catch(err => {
                res.send(err)
            })
    },
    update: function (req, res) {
        const body = req.body
        res.json({body})
    },
    delete: function (req, res) {
        console.log('hahaha', req.params.userid)
        User.deleteOne({_id:req.params.userid})
        .then(response => {
            res.json(response)
        })
    },
}

module.exports = userservice