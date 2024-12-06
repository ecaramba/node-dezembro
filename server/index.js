const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.send("<html><body><h1>Oi Turma</h1></body></html>");
});

app.get("/contato", function(req, res){
    res.status(401).send("Pag Contato");
})

app.listen(3000, function(){
    console.log("servidor iniciado");
})