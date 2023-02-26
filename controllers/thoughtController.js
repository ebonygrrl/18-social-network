const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
  // add new thoughts
  addThought (req, res) {
    Thought.create(req.body)
    .then(data => {
      User.updateOne({_id: req.body.userId}, {
        $push: { thoughts: data.id}
      })
      .then(userData => res.json({data, userData}))
      .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
      res.json(err)
    });
  },
  // get all thoughts
  getThoughts (req, res) {
    Thought.find()    
    .then(data => res.json(data))
    .catch(err => console.log(err));    
  },
  // get single thought
  getOneThought (req, res) {
    Thought.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // update single thought
  updateThought (req, res) {
    Thought.findByIdAndUpdate({_id: req.params.id}, {
      thoughtText: req.body.thoughtText, 
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }, 
  // delete thought
  deleteThought (req, res) {
    let thoughtId = req.params.id;
    let userUpdate;

    Thought.findById(thoughtId)
    .then(async data => {
      //console.log(data);

      // remove thought id from user thought array
      userUpdate = await User.findOneAndUpdate({username: data.username}, {
        $pull: { thoughts: thoughtId }
      }).then(fauData => console.log(fauData));

      // delete document
      await Thought.deleteOne({_id: thoughtId})
      .then(deletedData => res.json({userUpdate, deletedData, message: 'Thought has been deleted.'}));      
    })
    .catch(err => console.log(err));
  }
};