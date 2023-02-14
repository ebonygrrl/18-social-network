const router = require('express').Router();
const { Post, Comments } = require('../../models');

// create new post
router.post('/new', async (req, res) => {

  const post = {
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.userId,
  };

  await Post.create(post)
  .then((data) => {
    console.log(data)
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

// update post
router.put('/:id', async (req, res) => {
  // send post id through script-edit
  const post = {
    title: req.body.title,
    content: req.body.content
  };

  await Post.update(post, {where: {id: req.params.id}})
  .then((data) => {
    console.log(data)
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

// delete post
router.delete('/:id', async (req, res) => {
  const deleteComments = await Comments.destroy({where: {post_id: req.params.id}});
  const deletePost = await Post.destroy({where: {id: req.params.id}});  
  res.status(200).json(deletePost);
});

// wildcard
router.get('/*', (req, res) => {
    res.redirect('/');
});

module.exports = router;