//require dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var method = require("method-override");
var sanitizer = require("express-sanitizer");

//app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(sanitizer());
app.use(method("_method"));


// RESTful routes
app.get("/", function(req,res){
    res.sendFile("/public/index.html");
});

app.listen(8080, process.env.IP, function(){
    console.log("Server is running");
});
