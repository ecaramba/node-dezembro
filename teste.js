// faça uma função que retorne os n numeros de finonacci
// 0 1 1 2 3 5 8 ...

function fibonacci(quant)
{
    var n1 = 0;
    var n2 = 1;
    var prox = n1 + n2;

    console.log(n1, n2, prox);

    for (var i = 3; i <= quant; i++)
    {
        n1 = n2;
        n2 = prox;
    
        prox = n1 + n2;
        console.log(prox);
    }
}

fibonacci(10);