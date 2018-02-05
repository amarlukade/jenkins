var express = require('express');
var app2 = express();

app2.get('/',function(req,res) {
  res.send("Hello World");
});

app2.listen(4001);

