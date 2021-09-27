const express = require('express')
const app = express()
const port = 3011
require('./Models/DB')
var bodyParser = require('body-parser')
const controlling = require('./controllers/propertyController')


app.set('view engine', 'ejs');
app.set('views', '../frontend');
app.use('/public', express.static('../public'));
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.render('index');
})

app.use('/propertyRequest', controlling)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

