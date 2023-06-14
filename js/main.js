$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        // Manipulando como vai ser a mensagem da validação +++
        messages: {
            nome: 'Por favor, insita o seu nome!'
        }
    });
});