const express = require("express");
const app = express();
const path = require("path");

const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
io.on("connection" , function(socket){
    socket.on("send-location" ,  function(data){
    io.emit("recieve-location" , {id:socket.id , ...data}); //sent back to frontend
    });
    socket.on("disconnect" , function(){
        io.emit("user-disconnected" , socket.id);
    })
    console.log("Connected")
})

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/" , function(req , res){
    res.render("index");
})

server.listen(3000);