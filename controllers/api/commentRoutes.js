const router = require('express').Router();
const { Comments } = require('../../models');

// create new comment
router.post('/new', async (req, res) => {

  const comment = {
    post_id: req.body.post_id,
    comment: req.body.comment,
    user_id: req.session.userId,
  };
  await Comments.create(comment)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

// wildcard
router.get('/*', (req, res) => {
    res.redirect('/');
});

module.exports = router;