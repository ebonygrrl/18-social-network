const { Schema, Types, model } = require('mongoose');

const formatDate = (date) => {
  return `${ date.toLocaleString('default', {dateStyle: 'medium'}) } at ${ date.toLocaleString('default', {timeStyle: 'short'}) }`;
}

// schema for reactions
const reactionSchema = new Schema({
  reactionId: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId()
  },
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
}, {  
  id: false,
  toJSON: {
    getters: true // needed for time formats
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
    default: Date.now,
    get: formatDate
  },
  username: {
    type: String,
    required: true,
    ref: 'User'
  },
  reactions: [reactionSchema]
},
{
  id: false,
  toJSON: { 
    virtuals: true,
    getters: true // needed for time formats 
  }
});

// create a virtual property to count thought reactions
thoughtSchema.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);