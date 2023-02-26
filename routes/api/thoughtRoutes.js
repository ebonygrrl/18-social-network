const router = require('express').Router();
const { addThought, getThoughts, getOneThought, updateThought, deleteThought } = require('../../controllers/thoughtController');
const { deleteThoughts } = require('../../controllers/reactionController');

router.route('/').post(addThought).get(getThoughts);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

//router.route('/:thoughtId/reactions').post(updateUser).delete(deleteThoughts);

module.exports = router;