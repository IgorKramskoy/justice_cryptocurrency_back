const router = require('express').Router();
const express = require('express');
const jsonParser = express.json();

const register = require('./register');
const login = require('./login');

router
  .post('/register', jsonParser, register.action)
  .post('/login', jsonParser, login.action);

module.exports = router;