const express = require("express");
const app = express();
app.listen(3000, function(){
    console.log("server")
})
app.get("/", function(req, res){
    res.send("hola")
})