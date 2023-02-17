const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  username: String,
  email: String,
  thoughts: String,
  friends: Date
});