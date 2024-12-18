// assincronas

const fs = require("fs");
const fsPro = require("fs/promises");

let dados = "oi turma";

// callback
fs.writeFile("teste.txt", dados, function(retorno) {
    console.log(retorno)
});

// promise
fsPro.writeFile("teste.txt", dados)
    .then(function(retorno){
        // sucesso
        console.log(retorno)
    })
    .catch(function(erro){
        // erro
    })
    .finally(function(){
        // sempre
    });

// com async/await
async function gravar()
{
    let retorno = await fsPro.writeFile("teste.txt", dados); 
    console.log(retorno);
}

gravar();
