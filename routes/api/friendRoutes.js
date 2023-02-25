const router = require('express').Router();
const { addFriend } = require('../../controllers/friendController');

router.route('/:friendId').post(addFriend); //.delete(deleteFriend);

module.exports = router;