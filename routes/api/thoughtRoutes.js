const router = require('express').Router();
const { addThought, getThoughts, getOneThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

router.route('/').post(addThought).get(getThoughts);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

//router.route('/:thoughtId/reactions').post(updateUser).delete(deleteUser);

module.exports = router;