const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const api = require('./routes');

async function main() {
  const mongoURL = 'mongodb://root:example@0.0.0.0:27017/';

  const app = express();

  app.use(cors());
  app.use(express.static(__dirname + "/public"));
  app.use('/', api );

  await app.listen(4200, () => {
    console.log('server online')
  })

  try {
    await mongoose.connect(mongoURL, () => {
      console.log('mongo connected')
    })
  } catch (e) {
    console.log('cant connect to mongo')
  }
}

main().then()

