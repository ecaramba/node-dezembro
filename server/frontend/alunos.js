$(document).ready(function(){

    function listar(coluna)
    {
        let filtro = { ordenar: coluna};

        $("#lista-alunos").empty();

        $.getJSON("http://localhost:3030/lista", filtro, function(dados){
            
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
    }

    listar();

    $(".ordenar").click(function(){

        let coluna = $(this).attr("coluna");

        listar(coluna);

    }); //fim do click

}); // fim do ready