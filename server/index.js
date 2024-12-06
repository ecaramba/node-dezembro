const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res){
    res.send("<html><body><h1>Oi Turma</h1></body></html>");
});

app.get("/contato", function(req, res){
    console.log(req.query)
    res.json(req.query);
});

app.post("/contato", function(req,res){

    res.json(req.body);
    // res.send("form enviado")
});

app.listen(3000, function(){
    console.log("servidor iniciado");
})