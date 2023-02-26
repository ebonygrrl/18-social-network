const mongoose = require('mongoose');
const { Thought } = require('../models');

module.exports = {
  // update thought and add reaction
  addReaction (req, res) {

    Thought.findOneAndUpdate({_id: req.params.thoughtId}, {
      $push: { reactions: req.body }
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  //delete reaction
  deleteReaction (req, res) {
    User.findByIdAndUpdate({_id: req.params.thoughtId}, {
      $pull: { friends: req.params.friendId }
    })
    .then(data => res.json({data, message: 'Reaction has been deleted.'}))
    .catch(err => console.log(err));
  }
};


  // delete thought
//   deleteThoughts (req, res) {
//     let thoughtId = req.params.userId;

//     User.findByIdAndUpdate(thoughtId, {
//       $set: { thoughts: [] }
//     }, {
//       multi: true
//     })
//     .then(data => {
//       console.log(data);

//       res.json(data);      
//     })
//     .catch(err => console.log(err));
//   }
// };