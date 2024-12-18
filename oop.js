// encapusalemento

class Caneta {
    cor = "azul";

    tinta = 100;

    escrever(palavra) {
        console.log(palavra);
        
        this.tinta -= palavra.lenght;
    }

    constructor(cor)
    {
        this.cor = cor;
    }
}

// herança
class CanetaBotao extends Caneta {
    pontaFora = false;
}

// instanciação
let bic1 = new Caneta("Azul");
let bic2 = new CanetaBotao("Azul");
let bic3 = new Caneta("Vermelho");

bic1.cor = "preto";

console.log(bic1, bic2, bic3);