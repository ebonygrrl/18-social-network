const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;

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
  }
},
{
    toJSON: { virtuals: true },

});

// create a virtual property to get user reactions without adding to database
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactionCount;
    })
    .set(function(count) {
        let thisCount = count++;
        this.set({ thisCount });
    });

module.exports = model('Thought', thoughtSchema);

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