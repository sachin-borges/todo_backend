var express = require("express");
var app = express();
const routes = require('./routes')(express.Router(), app);
var bodyParser = require('body-parser')

const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/', routes)

app.listen(4001,function(){
    console.log('app is listening to port 4001');
});

