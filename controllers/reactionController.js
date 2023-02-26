const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // update user and addFriend
  // addFriend (req, res) {
  //   //console.log(req.params);
  //   User.findOneAndUpdate({_id: req.params.userId}, {
  //     $push: { friends: req.params.friendId }
  //   })
  //   .then(data => res.json(data))
  //   .catch(err => console.log(err));
  // }, 
  // //delete friend from user
  // deleteFriend (req, res) {
  //   User.findByIdAndUpdate({_id: req.params.userId}, {
  //     $pull: { friends: req.params.friendId }
  //   })
  //   .then(data => res.json({data, message: 'Friend has been deleted.'}))
  //   .catch(err => console.log(err));
  // },


  // delete thought
  deleteThoughts (req, res) {
    let thoughtId = req.params.userId;

    User.findByIdAndUpdate(thoughtId, {
      $set: { thoughts: [] }
    }, {
      multi: true
    })
    .then(data => {
      console.log(data);

      res.json(data);      
    })
    .catch(err => console.log(err));
  }
};