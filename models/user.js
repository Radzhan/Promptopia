import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{8,20}$/,
  },
  image: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
