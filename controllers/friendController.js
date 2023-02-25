const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // update user and addFriend
  addFriend (req, res) {
    res.json(req.body);
    // User.updateOne(req.params.userId, {
    //   username: req.body.username, 
    //   email: req.body.email
    // })
    // .then(data => res.json(data))
    // .catch(err => console.log(err));
  } 
  // delete friend from user
  // deleteFriend (req, res) {
  //   User.findByIdAndDelete(req.params.id)
  //   .then(data => res.json({data, message: 'The user has been deleted.'}))
  //   .catch(err => console.log(err));
  // }
};