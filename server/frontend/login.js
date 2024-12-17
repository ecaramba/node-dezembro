$(document).ready(function(){

    let url = (location.hostname != "localhost")? "https://api-alunos-pc2g.onrender.com" : "http://localhost:3030";

    $("#bt-entrar").click(function(){

        let login = {
            usuario: $('#usuario').val(),
            senha: $('#senha').val()
        };

        $.post(url + "/login", login)
            .done(function(retorno){
                console.log(retorno)
                let json = JSON.stringify(retorno)

                localStorage.setItem("usuario", json);

                location.assign("/index.html");
            })
            .fail(function(erro){
                $("#msg-erro")
                    .html(erro.erro)
                    .removeClass("d-none");

            });

    }); // fim click

});