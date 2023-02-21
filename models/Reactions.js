const { Schema } = require('mongoose');
const ObjectId = Schema.ObjectId;

function formatDate(date) {
  return date.toLocaleTimeString();
}

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
    default: Date.now,
    get: formatDate
  }
});

module.exports = reactionSchema;