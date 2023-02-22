const mongoose = require('mongoose');
const { User } = require('../models');

module.exports = {
  // add new user / post
  createUsers(req, res) {
    User.create({
      username: req.body.username, 
      email: req.body.email
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
    User.updateOne(req.params.id, {
      username: req.body.username, 
      email: req.body.email
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // delete user / delete
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
    .then(data => res.json({data, message: 'The user has been deleted.'}))
    .catch(err => console.log(err));
  }


  // GET SINGLE USER BY ID WITH THOUGHT AND FRIEND DATA



};