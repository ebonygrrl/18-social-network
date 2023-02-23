const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;

function formatDate(date) {
  return date.toLocaleTimeString();
}

// schema for reactions
const reactionSchema = new Schema({
  _id: ObjectId,
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

// schema for user thoughts
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  raections: [reactionSchema]
},
{
    toJSON: { virtuals: true },

});

// create a virtual property to get user reactions without adding to database
thoughtSchema.virtual('reactionCount', {
  ref: 'Thought',
  localField: '_id',
  foreignField: 'reactions',
  count: true })
.get(function () {
  return this.reactionCount.length;
});

module.exports = model('Thought', thoughtSchema);