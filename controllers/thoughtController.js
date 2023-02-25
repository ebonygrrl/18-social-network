const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // add new user / post
  addThought (req, res) {
    // {
    //   "thoughtText": "Here's a cool thought...",
    //   "username": "lernantino",
    //   "_id": "63f80f5ccd5542addab64e3c",
    //   "createdAt": "2023-02-24T01:14:04.761Z",
    //   "raections": [],
    //   "__v": 0,
    //   "id": "63f80f5ccd5542addab64e3c"
    // }
    Thought.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.json(err)
    });
  },
  getThoughts (req, res) {
    
  }
  // get all users / get
//   getUsers (req, res) {
//     User.find()    
//     .then(data => res.json(data))
//     .catch(err => console.log(err));
//   },
//   // update user / put
//   updateUser (req, res) {
//     User.updateOne(req.params.id, {
//       username: req.body.username, 
//       email: req.body.email
//     })
//     .then(data => res.json(data))
//     .catch(err => console.log(err));
//   }, 
//   // delete user / delete
//   deleteUser (req, res) {
//     User.findByIdAndDelete(req.params.id)
//     .then(data => res.json({data, message: 'The user has been deleted.'}))
//     .catch(err => console.log(err));
//   },
//   // GET SINGLE USER BY ID WITH THOUGHT AND FRIEND DATA
//   getOneUser (req, res) {
//     User.findById(req.params.id)
//     .then(userData => {
//       Thought.find({id: userData.id})
//       .then(thoughtData => res.json(thoughtData))
//       .catch(err => console.log(err));
//     });
//   }
};