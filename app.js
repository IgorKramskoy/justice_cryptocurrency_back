const express = require('express');
const app = express();

const api = require('./routes')

app.use('/', api )

app.listen(4200);