const router = require('express').Router();

const register = require('./register');
const login = require('./login');

router
  .get('/login', login.action)
  .get('/register', register.action)

module.exports = router;