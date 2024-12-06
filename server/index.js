const express = require("express");
const app = express();

const fs = require("fs");
const csv = require("node-csv").createParser();

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

    // res.json(req.body);
    let dados = req.body.nome 
            + ","
            + req.body.cidade 
            + "," 
            + req.body.senha 
            + "\n";

    fs.writeFile("dados.csv", dados, {flag: "a"}, function(){
        res.send("dados salvos com sucesso");
    })

});

app.get("/ler", function(req, res){
    // ler o arquivo csv e imporimir uma tabela

    csv.parseFile("dados.csv", function(err, dados) {
        console.log(dados);
        let html = "<table>"
            + "<tr><th>Nome</th> <th>Cidade</th> </tr>";

        dados.forEach(function(linha){
            html += "<tr><td>"+ linha[0] +"</td> <td>"+ linha[1] +"</td></tr>"

        });
        
        html += "</table>";

        res.send(html)
    })

});

app.listen(3000, function(){
    console.log("servidor iniciado");
})