const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;

// schema for reactions
const reactionSchema = new Schema({
  _id: new ObjectId,
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

// create a virtual property to get user reactions without adding to database
thoughtSchema
    .virtual('reactionCount', {
        
    });

// Schema Settings

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// Reaction (SCHEMA ONLY)

// reactionId

// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId

// reactionBody

// String
// Required
// 280 character maximum

// username

// String
// Required

// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

module.exports = model('Reactions', reactionSchema);