const express = require("express");
const path = require("path");

const app = express();
//const urlencodedParser = express.urlencoded({extended: false});
app.set("view engine", "html");
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});




//http://localhost:3000