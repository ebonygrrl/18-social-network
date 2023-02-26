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
    Thought.findByIdAndUpdate({_id: req.params.thoughtId}, {
      $pull: { reactions: req.body }
    })
    .then(data => res.json({message: 'Reaction has been deleted.'}))
    .catch(err => console.log(err));
  }
};