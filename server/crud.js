
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", function(req, res) {
    //INSERT INTO alunos (nome, email, cidade, idade) VALUES ('roberto', 'rob@abc.com', 'Pinhais', 32);
    res.json(req.body)
    // res.send("create");
});

app.get("/lista", function(req, res) {
    // SELECT * FROM alunos 
    res.send("read");
});

app.post("/atualizar", function(req, res){
    //UPDATE alunos SET nome = "Roberto" WHERE id = 4;
    res.send("update");
});

app.post("/delete", function(req, res){
    // DELETE FROM alunos WHERE id = 5;
    res.send("delete");
});

app.listen(3000, function(){
    console.log("servidor iniciado");
})