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
    User.updateOne(req.params.id, {
      username: req.body.username, 
      email: req.body.email
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // delete user / delete
  deleteUser (req, res) {
    User.findByIdAndDelete(req.params.id)
    .then(data => res.json({data, message: 'The user has been deleted.'}))
    .catch(err => console.log(err));
  },
  // GET SINGLE USER BY ID WITH THOUGHT AND FRIEND DATA
  getOneUser (req, res) {
    User.findById(req.params.id)
    .then(userData => {
      Thought.find({id: userData.id})
      .then(thoughtData => res.json(thoughtData))
      .catch(err => console.log(err));
    });
  }
};


// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.