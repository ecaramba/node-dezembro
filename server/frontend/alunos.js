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
                    +'<td><button codigo="'+ item.id +'" class="bt-del btn btn-sm btn-outline-danger"> <i class="bi bi-trash"></i> </button></td>'
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

    $("#lista-alunos").on("click",".bt-del", function(){
        let cod = $(this).attr("codigo");
        $("#codigo").val(cod);

        $("#modal-delete").modal("show");
    }); //fim btdel

    $("#bt-confirma-del").click(function(){

        let aluno = {
            id:$("#codigo").val() 
        }

        $.post("http://localhost:3030/delete", aluno, function(retorno){
            $("#modal-delete").modal("hide");
            listar();
        });

    }); //fim bt-confirma-del

}); // fim do ready