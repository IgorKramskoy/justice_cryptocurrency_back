const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');

const api = require('./routes');
const mongoClient = new MongoClient("mongodb://root:example@0.0.0.0:27017/");
let dbClient;

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use('/', api );

mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("users").collection("data-user");
  app.listen(5200, function(){
    console.log("Сервер ожидает подключения...");
  });
});

