const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
const emailVal = /[^\s]*@[a-z0-9.-]*/i;

// schema for users
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username required.'],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (input) => {
        return emailVal.test(input); 
      },
      message: 'Please use a valid email address.'
    }
  },
  thoughts: [{
    type: ObjectId,
    ref: 'Thought'
  }],
  friends:  [{
    type: ObjectId,
    ref: 'User'
  }]
}, { toJSON: { virtuals: true } });

// create a virtual property to count user friends
userSchema.virtual('friendCount')
.get(function() {
  return this.friends.length;
});

module.exports = model('User', userSchema);