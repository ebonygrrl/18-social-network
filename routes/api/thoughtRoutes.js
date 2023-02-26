const router = require('express').Router();
const { addThought, getThoughts, getOneThought } = require('../../controllers/thoughtController');

router.route('/').post(addThought).get(getThoughts);

router.route('/:id').get(getOneThought);

//router.route('/:thoughtId/reactions').put(updateUser).delete(deleteUser);

module.exports = router;