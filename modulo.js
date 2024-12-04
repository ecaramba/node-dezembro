
function soma(n1, n2)
{
    return n1 + n2;
}

// função anonima
let mult = function(n1, n2)
{
    return n1 * n2;
}

function calc(n1, n2, op)
{
    let res = op(n1, n2);
    console.log(res)
    return res;
}

module.exports = soma;