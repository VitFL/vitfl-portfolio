import mongoose, { Schema } from 'mongoose';
import { nameValidator, emailValidator, passwordValidator } from '../validation/user';
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: nameValidator
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: false,
    validate: nameValidator
  }
});

export default mongoose.model('User', UserSchema);
