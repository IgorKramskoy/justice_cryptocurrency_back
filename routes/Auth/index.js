const router = require('express').Router();
const express = require('express');
const jsonParser = express.json();

const register = require('./register');
const login = require('./login');
const editUser = require('./edit-user')
router
  .post('/register', jsonParser, register.action)
  .post('/login', jsonParser, login.action)
  .put("/profile", jsonParser, editUser.action);
module.exports = router;