const router = require("express").Router()
const userservice = require("./services/userservice")
const computerservice = require("./services/computerservice")


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

    /**
         * 
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
    .get(computerservice.list)

    /**
     * 
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
    .post(computerservice.create)

router.route('/computer/:computerid')

    /**
         * 
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
    .get(computerservice.read)

    /**
     * 
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
    .put(computerservice.update)

    /**
     * 
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
    .delete(computerservice.delete)



module.exports = router;