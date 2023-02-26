const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // add new thoughts
  addThought (req, res) {
    Thought.create(req.body)
    .then(data => {
      res.json(data);
      User.updateOne({_id: req.body.userId}, {
        $push: { thoughts: data.id}
      })
      .then(userData => console.log(userData))
      .catch(err => {
        console.log(err);
        res.json(err)
       });
    })
    .catch(err => {
      console.log(err);
      res.json(err)
    });
  },
  // get all thoughts
  getThoughts (req, res) {
    User.find()    
    .then(data => res.json(data))
    .catch(err => console.log(err));    
  },
  // get single thought
  getOneThought (req, res) {
    Thought.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }
  
  
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