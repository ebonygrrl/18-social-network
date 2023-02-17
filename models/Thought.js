const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: Date,
  username: {
    type: String,
    required: true
  }
});

thoughtSchema.virtual('reactions').get(function() {
    return this.reactions;
});

module.exports = mongoose.model('Thought', thoughtSchema);