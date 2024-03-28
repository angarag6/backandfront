import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    length: {
      min: 2,
    },
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  phoneNumber: {
    type: Number,
    length: {
      minlength: 8,
      maxlength: 8,
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const UserModel = mongoose.model('users', UserSchema);

export { UserModel };