var express = require('express');
var app1 = express();

app1.get('/',function(req,res) {
  res.send("Hello World");
});

app1.listen(4001);

