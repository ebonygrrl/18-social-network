const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // add new user / post
  createUsers (req, res) {
    User.create({
      username: req.body.username, 
      email: req.body.email
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.json(err)
    });
  },
  // get all users / get
  getUsers (req, res) {
    User.find()    
    .then(data => res.json(data))
    .catch(err => console.log(err));
  },
  // update user / put
  updateUser (req, res) {
    User.findOneAndUpdate({_id: req.params.id}, {
      username: req.body.username, 
      email: req.body.email
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // delete user / delete
  deleteUser (req, res) {
    let userId = req.params.id;

    User.findById(userId)
    .then(async data => {
      // delete associated thoughts
      await Thought.deleteMany({username: data.username});
      await User.deleteOne({_id: userId});

      res.json({message: 'The user has been deleted.'})
    })
    .catch(err => console.log(err));
  },
  // get single user by id
  getOneUser (req, res) {
    User.findById(req.params.id)
    .then(userData => {
      console.log(userData);
      res.json(userData);
    });
  }
};

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.