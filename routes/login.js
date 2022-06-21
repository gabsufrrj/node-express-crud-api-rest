const loginRouter = require('express').Router();
const crypto = require('crypto');
// const fs = require('../helpers/fs');

const generateToken = () => crypto.randomBytes(8).toString('hex');

loginRouter.post('/', async (req, res) => {
  res.status(200).json({ token: generateToken() });
});

// console.log(generateToken());

module.exports = loginRouter;