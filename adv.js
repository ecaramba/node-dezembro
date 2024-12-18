// variaveis e constantes
let nome = "edir";
const nome2 = "edir";

// função arrow
const soma = (n1, n2) => n1 + n2;

// if terciario
let cidade = (nome == "edir")? "Curitiba": "Pinhais";

// if nulo
let valor = nome || "luiz";

nome = 123;

if (typeof nome == 'string')
{

}

let tinta = "preto";

// formato JSON
// encapsulamento
let caneta = {
    // atributos
    cor: "azul",
    tinta: 100,
    
    // metodos
    escrever: function(palavra){
        console.log(palavra);
        let gasto = palavra.length;

        this.tinta -= gasto;        
    }
};

let cor_caneta = caneta.cor;

// destruturação

let { cor, tinta: tintaCaneta  } = caneta;

console.log(cor, tintaCaneta);

// operador rest
let prop = {...caneta};

let cidades = ["curitiba", "pinhais", "colombo"];

let [val1, val2] = cidades;
