// 1 - inverter o texto
// Oi Turma -> amruT iO
let texto = "Que dia ensolarado!";

let fim = texto.length - 1;

let resultado = "";

for (let ini = texto.length - 1; ini >= 0; ini--)
{
    resultado += texto.charAt(ini);
}
console.log(resultado);

// 2 - contar vogais e consoantes
// texto -> vogais: 2 consoantes: 3

let vogais = ["a", "e", "i", "o", "u"]; 
let num_vogal = 0;
let num_cons = 0;

for (let ini = 0; ini <= texto.length -1; ini++)
{
    let letra = texto.charAt(ini); 
    
    if (vogais.includes(letra) == true)
    {
        num_vogal += 1;
    } else 
    {
        num_cons += 1;
    }
}

console.log("vogais: "+ num_vogal + " consoantes: " +num_cons);


// 3 - colocar o texto em ordem alfabetica
// texto -> eottx
// 3412 -> 1234
var ord = texto.split("").sort().join("");
console.log(ord)