
var usuario = {
    'ativa': 'n',
}

var dados = JSON.stringify(usuario);

$.ajax({
    url: 'http://localhost/crud-php/vagas/dataInput.php',
    type: 'POST',
    data: { data: dados },
    success: function (result) {
        // Retorno se tudo ocorreu normalmente
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // Retorno caso algum erro ocorra
    }
});
