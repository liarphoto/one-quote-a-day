var express = require('express');
var app = express();

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(3000,function(request, response){
    console.log("Express server is running on http://localhost:3000");
});

app.get('/',function(request, response){
    response.sendFile(__dirname+'/index.html');
});



function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


module.exports = app;