const router = require('express').Router();
const { createUsers, getUsers, getOneUser, updateUser, deleteUser } = require('../../controllers/userController');

router.route('/').post(createUsers).get(getUsers);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;