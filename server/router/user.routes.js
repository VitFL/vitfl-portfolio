import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const router = express.Router();

import User from '../models/User';
const {
  env: { JWT_SECRET }
} = process;

// @route  POST api/user/register
// @desc   Register user
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const userPass = await bcrypt.hash(password, salt);
  const newUser = new User({
    name: name,
    email: email,
    password: userPass,
    role: role
  });

  try {
    const result = await newUser.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// @route  POST api/user/login
// @desc   Login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then(function(user) {
    if (user == null) {
      return res.status(400).send({ usernotfound: 'User not found' });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const loginData = {
          id: user.id,
          name: user.name
        };
        const token = jwt.sign(loginData, JWT_SECRET, { expiresIn: 3600 }); // Token expires in 1 hour
        const decoded = jwt.decode(token);

        const userData = {
          id: decoded.id,
          name: decoded.name,
          email: user.email,
          phone: user.phone
        };

        const body = {
          token: token,
          userData: userData
        };
        return res.status(200).json(body);
      } else {
        return res.status(400).json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

// @route  POST api/user/profile
// @desc   Receiving logged-in user profile data by token
router.post('/profile', (req, res) => {
  const { token } = req.body;
  const decoded = jwt.decode(token);
  User.findOne({ _id: decoded.id }).then(function(user) {
    if (user.name === decoded.name) {
      const userData = {
        id: decoded.id,
        name: decoded.name,
        email: user.email,
        phone: user.phone
      };
      const body = {
        token: token,
        userData: userData
      };
      return res.json(body);
    } else {
      return res.status(400).send({ wrongtoken: 'Wrong token provided' });
    }
  });
});

module.exports = router;
