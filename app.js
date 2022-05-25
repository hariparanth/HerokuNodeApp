var express = require('express');
var app = express();
const port=process.env.PORT || 3000
app.get('/', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(port);