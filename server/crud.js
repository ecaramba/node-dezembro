
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

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("crud.db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", function(req, res) {
    let sql = "INSERT INTO alunos (nome, email, cidade, idade)"
            + "VALUES ('"+ req.body.nome +"', '"+ req.body.email +"', '"+ req.body.cidade +"', "+ req.body.idade +")";
    
    db.exec(sql, function(erro) {
         res.send("aluno adicionado");
    })
        
});

app.get("/lista", function(req, res) {
    const sql = "SELECT * FROM alunos";
    db.all(sql, function(erro, linha) {
        res.json(linha);
    })
});

app.post("/atualizar", function(req, res){
    
    if (!req.body.id)
    {
        res.status(400).send("o campo 'id' é obrigatório");
    }
    
    let sql = "UPDATE alunos SET ";

    if (req.body.nome)
    {
        sql += " nome = '"+req.body.nome+"', "
    }
  
    if (req.body.idade)
    {
        sql += " idade = "+req.body.idade+", " 
    }

    if (req.body.email)
    {
        sql += " email = '"+req.body.email+"', "
    } 

    if (req.body.cidade)
    {
        sql +=  "cidade = '"+req.body.cidade+"', "
    } 

    if (req.body.telefone)
    {
        sql += " telefone = '"+req.body.telefone+"' "
    }

        sql += "WHERE id = " + req.body.id;

    db.exec(sql, function(erro){
        if (erro){
            res.status(500).json(sql);
        } else {
            res.json("atualizado com sucesso")
        }
    });
});

app.post("/delete", function(req, res){
    let sql =  "DELETE FROM alunos WHERE id = " + req.body.id;
    db.exec(sql, function(erro){
        if (erro) {
            res.json(erro);
        } else {
            res.json("deletedo com sucesso");
        }
    })
});

app.listen(3000, function(){
    console.log("servidor iniciado");
})