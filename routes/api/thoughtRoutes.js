const router = require('express').Router();
const { addThought } = require('../../controllers/thoughtController');

router.route('/').post(addThought);//.get(getUsers);

//router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;