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

    $("#bt-salvar").click(function(){

        let dados = {
            nome: $("#nome").val(),
            telefone: $("#telefone").val(),
            email: $("#email").val(),
            cidade: $("#cidade").val(),
            idade: $("#idade").val()
        };


        $.post("http://localhost:3030/cadastro", dados, function(retorno){
            
            $("#msg-status").toast("show");
            $("#modal-novo").modal("hide");
            listar();
            $("input").val("");

        }); // fim do post

    }); // fim do btsalvar

}); // fim do ready