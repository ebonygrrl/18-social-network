const router = require('express').Router();
const { createUsers } = require('../../controllers/userController');

router.route('/').post(createUsers);

module.exports = router;