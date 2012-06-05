var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);
app.use(express.bodyParser());
//io.set('log level', 1);

app.listen(3000);

app.use(express.static(__dirname));

app.post('/', function(req, res){
  console.log(req.body);
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  res.send();
});

io.sockets.on('connection', function (socket) {
  console.log("In connection");
//  socket.emit('news', { hello: 'world' });
//  socket.broadcast.emit('news', message);

  socket.on('newvalue', function (data) {
    console.log("In newvalue");
    console.log(data);
    io.sockets.emit('update', data);
  });
});




