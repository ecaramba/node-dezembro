$(document).ready(function(){

    $.getJSON("http://localhost:3030/lista", function(dados){
        
        dados.forEach(function(item){
            let html = "<tr>"
                +"<td>"+ item.id +"</td>"
                +"<td>"+ item.nome +"</td>"
                +"<td>"+ item.email +"</td>"
                +"<td>"+ item.telefone +"</td>"
                +"<td>"+ item.cidade +"</td>"
                +"<td>"+ item.idade +"</td>"
                +"</tr>"

            $("#lista-alunos").append(html);
        }); //fim do foreach

    }); //fim do getjson

}); // fim do ready