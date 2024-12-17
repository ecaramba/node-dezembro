
// CRUD
// Criar
// Read- Ler
// Update - Atualizar
// Delete

// cadastro de alunos
// nome - email - cidade - idade - telefone
// API -> comunicação de dados

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("crud.db");

let porta = 3030;

if (process.env.server_prod)
{
    porta = 80;
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", function(req, res) {
    let sql = "INSERT INTO alunos (nome, email, cidade, telefone, idade)"
            + "VALUES ('"+ req.body.nome +"', '"
            + req.body.email +"', '"
            + req.body.cidade +"', '"
            + req.body.telefone +"', "
            + req.body.idade +")";
    
    db.exec(sql, function(erro) {
        if (erro)
        {
            res.status(500).json(sql);
        } else{
            res.send("aluno adicionado");
        }
    })
        
});

app.get("/lista", function(req, res) {
    
    let coluna = req.query.ordenar;

    let sql = "";

    if (coluna)
    {
        sql = "SELECT * FROM alunos ORDER BY " + coluna;
    } else {
        sql = "SELECT * FROM alunos ORDER BY id";
    }

    db.all(sql, function(erro, linha) {
        if(erro)
        {
            res.status(500).json(sql)
        } else{
            res.json(linha);
        }
    })
});

app.get("/ler", function(req, res){

    let id = req.query.id;

    let sql = "SELECT * FROM alunos where id= " + id;

    db.get(sql, function(erro, dados) {
        if (dados)
        {
            res.json(dados);
        } else {
            res.status(404).send("Aluno não encontrado");
        }
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
            res.status(500).json(erro);
        } else {
            res.json("deletedo com sucesso");
        }
    })
});

app.post("/login", function(req, res){
    let usuario = req.body.usuario;
    let senha = req.body.senha;

    let sql = `SELECT usuario, nome  FROM usuarios 
        WHERE usuario = '${usuario}' AND senha = '${senha}'`;

    db.get(sql, function(erro, dados){
        if (dados)
        {
            res.json(dados);
        } else {
            let msg = {erro: "Usuário ou senha incorretos"};
            res.status(400).json(msg);
        }
    })

});

app.listen(porta, function(){
    console.log("servidor iniciado na porta: " + porta);
})