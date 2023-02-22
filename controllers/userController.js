const mongoose = require('mongoose');
const { User } = require('../models');

module.exports = {
  // add new user / post
  createUsers(req, res) {
    User.create({
      username: req.body.username, 
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  },
  // get all users / get
  getUsers (req, res) {
    User.find()    
    .then(data => res.json(data))
    .catch(err => console.log(err));
  },
  // update user / put
  updateUser(req, res) {
    User.updateOne({
      username: req.body.username, 
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // delete user / delete
  deleteUser(req, res) {
    console.log(req);
    User.findByIdAndDelete(req.params.id)  //req.params
    .then(data => res.json({data, message: 'The user has been deleted.'}))
    .catch(err => console.log(err));
  }
};