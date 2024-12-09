
// CRUD
// Criar
// Read- Ler
// Update - Atualiazar
// Delete

// cadastro de alunos
// nome - email - cidade - idade - telefone
// API -> comunicação de dados

const express = require("express");
const app = express();

app.post("/cadastro", function(req, res) {
    res.send("create");
});

app.get("/lista", function(req, res) {
    res.send("read");
});

app.post("/atualizar", function(req, res){
    res.send("update");
});

app.post("/delete", function(req, res){
    res.send("delete");
});

app.listen(3000, function(){
    console.log("servidor iniciado");
})