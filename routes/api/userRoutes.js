const router = require('express').Router();
const { createUsers, getUsers, updateUser, deleteUser } = require('../../controllers/userController');

router.route('/').post(createUsers).get(getUsers);

router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;