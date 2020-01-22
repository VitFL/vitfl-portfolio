import validate from 'mongoose-validator';
import User from '../models/User';

const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [1, 254],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isEmail',
    message: 'Email not valid'
  })
];

const passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [6, 18],
    message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

const isNameUnique = name => {
  User.findOne({ name: name }).then(async user => !!user);
};
const isEmailUnique = email => {
  User.findOne({ email: email }).then(async user => !!user);
};

export { nameValidator, emailValidator, passwordValidator, isNameUnique, isEmailUnique };
