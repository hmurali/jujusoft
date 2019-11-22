const router = require("express").Router()
const userservice = require("./services/userservice")
const computerservice = require("./services/computerservice")


//Routes
router.route('/users')
    /**
     * Get All Users
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
     * {}
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * [{
     *     email: 'example@email.com',
     *     password: '******',
     *     _id: ''
     * }]
     * 
     */
    .get(userservice.list)
    /**
     * Creating New Users
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
     *     email: 'example@email.com',
     *     password: '******'
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     email: 'example@email.com',
     *     password: '******',
     *     _id: ''
     * }
     * 
     * 
     */
    .post(userservice.create)

router.route('/users/:userid')
    /**
     * Endpoint Gets a New User
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
     *     _id : ''
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     email: 'example@email.com',
     *     password: '******',
     *     _id: ''
     * }
     * 
     */
    .get(userservice.read)
    /**
     * Put Userid
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
     *     email: 'example@email.com',
     *     password: '******',
     *     _id: ''
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     email: 'example@email.com',
     *     password: '******',
     *     _id: ''
     * }
     * 
     */
    .put(userservice.update)

    /**
     * Delete User
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
     *     _id: ''
     * }
     * 
     * @apiSuccessExample {type} Success-Response:
     * {}
     * 
     * 
     * 
     */
    .delete(userservice.delete)

router.route('/computer')

    /**
         * List All Registered Computers
         * @api {Get} /computer ListComputers
         * @apiName ListComputers
         * @apiGroup Computer
         * @apiVersion  0.1.0
         * 
         * @apiParam  {String} paramName description
         * 
         * @apiSuccess (200) {type} name description
         * 
         * @apiParamExample  {type} Request-Example:
         * {}
         *     
         * 
         * 
         * 
         * @apiSuccessExample {type} Success-Response:
         * [{
         *     ip: '192.168.1.42',
         *     name: 'office',
         *     _id: ''
         * }]
         * 
         */
    .get(computerservice.list)

    /**
     * Get All Computer Service
     * @api {Post} /computer CreateComputer
     * @apiName CreateComputer
     * @apiGroup Computer
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     ip: '192.168.1.42',
     *     name: 'office'
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
     *     ip: '192.168.1.42',
     *     name: 'office',
     *     _id: ''
     * }
     * 
     */
    .post(computerservice.create)

router.route('/computer/:computerid')

    /**
         * Get All Computerid
         * @api {Get} /computer/:computerid ReadComputer
         * @apiName ReadComputer
         * @apiGroup Computer
         * @apiVersion  0.1.0
         * 
         * @apiParam  {String} paramName description
         * 
         * @apiSuccess (200) {type} name description
         * 
         * @apiParamExample  {type} Request-Example:
         * {
         *     _id : ''
         * }
         * 
         * 
         * @apiSuccessExample {type} Success-Response:
         * {
         *     ip: '192.168.1.42',
         *     name: 'office',
         *     _id: ''
         * }
         * 
         */
    .get(computerservice.read)

    /**
     * Update All Computerid
     * @api {Put} /computer/:computerid UpdateComputer
     * @apiName UpdateComputer
     * @apiGroup Computer
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
         *     ip: '192.168.1.42',
         *     name: 'office',
         *     _id: ''
         * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {
         *     ip: '192.168.1.42',
         *     name: 'office',
         *     _id: ''
         * }
     * 
     */
    .put(computerservice.update)

    /**
     * Delete Computerid
     * @api {Delete} /computer/:computerid DeleteComputer
     * @apiName DeleteComputer
     * @apiGroup Computer
     * @apiVersion  0.1.0
     * 
     * @apiParam  {String} paramName description
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
     * {
     *     _id: ''
     * }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
     * {}
     * 
     */
    .delete(computerservice.delete)



module.exports = router;