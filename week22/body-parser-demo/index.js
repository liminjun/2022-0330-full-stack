const express = require('express')
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('week22 三层应用程序')
})

app.post('/test', function (req, res) {
    console.log(req.body)
    console.log(req.body.username, req.body.password);
    res.send(req.body.username + ':'+ req.body.password)
})

app.listen(3000)
console.log('Server listening port:3000')