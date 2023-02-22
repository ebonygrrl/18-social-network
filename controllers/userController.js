const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // add new user 
createUsers(req, res) {
  User.create({
    username: req.body.username, 
    email: req.body.email,
    //thoughts: req.body.thoughts,
    //friends: req.body.friends
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

// find all users
// const findAllUsers = (req, res) => {
//   User.find({});  
// };
}

// create new post
// router.post('/api/users', async (req, res) => {

//   const post = {
//     title: req.body.title,
//     content: req.body.content,
//     user_id: req.session.userId,
//   };

//   await Post.create(post)
//   .then((data) => {
//     console.log(data)
//     res.json(data);
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//     console.log(err);
//   });
// });

// // update post
// router.put('/:id', async (req, res) => {
//   // send post id through script-edit
//   const post = {
//     title: req.body.title,
//     content: req.body.content
//   };

//   await Post.update(post, {where: {id: req.params.id}})
//   .then((data) => {
//     console.log(data)
//     res.json(data);
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//     console.log(err);
//   });
// });

// // delete post
// router.delete('/:id', async (req, res) => {
//   const deleteComments = await Comments.destroy({where: {post_id: req.params.id}});
//   const deletePost = await Post.destroy({where: {id: req.params.id}});  
//   res.status(200).json(deletePost);
// });

// // wildcard
// router.get('/*', (req, res) => {
//     res.redirect('/');
// });

//module.exports = { createUsers, findAllUsers };