var express = require('express');
var app = express();

app.listen(3000,function(request, response){
    console.log("Express server is running on http://localhost:3000");
});

app.get('/',function(request, response){
    response.sendFile(__dirname+'/index.html');
});