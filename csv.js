// adicionar um novo aluno no arquivo
const fs = require("fs");

let nome = "Maria";
let cidade = "Curitiba";
let idade = 33;

let dados = nome + "," +idade + "," +cidade+ "\n";

fs.writeFile("alunos.csv", dados, {flag: "a"}, function(){
    console.log("gravado");
})

// ler o arquivo csv e colocar o conteudo na tela
fs.readFile("alunos.csv", "utf8", function(erro, dados){
    if (erro)
    {
        console.log(erro);
    } else 
    {
        console.log(dados);
    }
});

