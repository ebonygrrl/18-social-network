const router = require('express').Router();
const { createUsers, getUsers, getOneUser, updateUser, deleteUser } = require('../../controllers/userController');
const { addFriend, deleteFriend } = require('../../controllers/friendController');


router.route('/').post(createUsers).get(getUsers);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;