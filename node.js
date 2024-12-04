
const fs = require("fs");
const soma = require("./modulo");

let texto = "Um conteudo qualquer para um arquivo.";

console.log("antes");

fs.writeFile("arquivo.txt", texto, function(){
    console.log("terminou");
});
fs.writeFile("arquivo.txt", texto, function(){
    console.log("terminou");
});

console.log("depois");

soma(2, 4);