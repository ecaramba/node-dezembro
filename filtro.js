// filtar pessoas de curitiba
const csv = require("node-csv").createParser();

csv.parseFile("alunos.csv", function(erro, dados){
    
    let res = dados.filter(function(linha){ 
     
        if (linha[2] == "colombo")
        {
            return true;
        } else
        {
            return false;
        }
    });

    console.log(res);
});
