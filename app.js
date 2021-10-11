const express = require("express");
const path = require("path");

const app = express();
//const urlencodedParser = express.urlencoded({extended: false});
app.set("view engine", "html");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/second", function(req, res){
    res.sendFile(path.join(__dirname + '/second.html'));
});
app.get("/third", function(req, res){
    res.sendFile(path.join(__dirname + '/third.html'));
});
app.get("/fourth", function(req, res){
    res.sendFile(path.join(__dirname + '/fourth.html'));
});
app.get("/fifth", function(req, res){
    res.sendFile(path.join(__dirname + '/fifth.html'));
});
app.get("/sixth", function(req, res){
    res.sendFile(path.join(__dirname + '/sixth.html'));
});
app.get("/chess", function(req, res){
    res.sendFile(path.join(__dirname + '/chess.html'));
});
app.get("/changeColor", function(req, res){
    res.sendFile(path.join(__dirname + '/changeColor.html'));
});


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});




//http://localhost:3000