 // servertest.js

 const socketio = require('socket.io');
 const http = require('http');
 const server = http.createServer().listen(9994);
 const io = socketio(server);
 
 // const io = socketio (server, {
 //     // port : 9994 },
 //     // {
 //     cors: {
 //       origin: "*",
 //     }
 //   });
 
 
 io.sockets.on('connection', (socket) => {
     
     // socket.emit("inputdata", 1)
     // socket.emit("inputdata2", 1)
 
     socket.join("output");
     // socket.on('outputdata', (data) => {
     //     console.log(data);
     //     io.sockets.in("output").emit('outputdata', data);
     // });
     socket.on('inputdata', (data) => {
     console.log(data);
     io.sockets.in("output").emit('outputdata', data);
     });
 
     socket.on('isbndata', (data) => {
     console.log(data);
     });
 });