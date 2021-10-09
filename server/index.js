var express = require('express');
var cors = require('cors')
var path = require('path');

var convert = require('./controller/convert')
var resize = require('./controller/resize')
var rotate = require('./controller/rotate')

var app = express();
app.use("/public", express.static(path.join(__dirname, "public")))


app.post('/convert', cors(), convert.CONVERT);
app.post('/resize', cors(), resize.RESIZE);
app.post('/rotate', cors(), rotate.ROTATE);



app.listen(4000);