const express = require('express')
const app = express()
const port = 3020
const bodyParser = require('body-parser');
const request = require('request')
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/FIT3160', function (err, client) {
  if (err) throw err;

  let db = client.db('FIT3160');
  db.collection('semester01').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});

app.get('/', function (req, res) {
  res.render('index', { weather: null, error: null });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})