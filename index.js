var express = require('express');
var app = express();

var router = require('./routing')

app.use('/hello1', router )



app.listen(8080);

// app.listen(port, [host], [backlog], [callback])

