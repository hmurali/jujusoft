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
    delete: function (req, res) {
        console.log('delete /computer/:computerid')
        res.json({})
    },
}

//Routes
router.route('/users')
    /**
     * 
     * @api {Get} /users ListUsers
     * @apiName ListUsers
     * @apiGroup Users
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     property : value
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     property : value
     * }
     * 
     */
    .get(userservice.list)
    /**
     * 
     * @api {Post} /users CreateUsers
     * @apiName CreateUsers
     * @apiGroup Users
     * @apiVersion  0.1.0
     * 
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     property : value
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     property : value
     * }
     * 
     * 
     */
    .post(userservice.create)

router.route('/users/:userid')
    /**
     * 
     * @api {Get} /users/:Userid ReadUser
     * @apiName ReadUser
     * @apiGroup Users
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     property : value
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     property : value
     * }
     * 
     */
    .get(userservice.read)
    /**
     * 
     * @api {Put} /users/:Userid UpdateUser
     * @apiName UpdateUser
     * @apiGroup Users
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     property : value
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     property : value
     * }
     * 
     */
    .put(userservice.update)

    /**
     * 
     * @api {Delete} /users/:Userid DeleteUser
     * @apiName DeleteUser
     * @apiGroup Users
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     property : value
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     property : value
     * }
     * 
     */
    .delete(userservice.delete)

router.route('/computer')
    .get(computerservice.list)
    .post(computerservice.create)

router.route('/computer/:computerid')
    .get(computerservice.read)
    .put(computerservice.update)
    .delete(computerservice.delete)



module.exports = router;