const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
const emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

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
  thoughts: {
    type: ObjectId,
    ref: 'Thought'
  },
  friends:  {
    type: ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('User', userSchema);