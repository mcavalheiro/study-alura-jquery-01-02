var tempoInicial = $('#tempo-digitacao').text();
var campoDigitacao = $('.campo-digitacao');

$(function(){
    atualizaFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#reiniciar-jogo").click(reiniciaJogo);
});

function atualizaFrase(){
    var frase = $('.frase').text();
    var numPalavras = frase.split(' ').length;
    var tamanhoFrase = $('#tamanho-frase');
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
    campoDigitacao.on('input', function(){
        var conteudo = campoDigitacao.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $('#contador-palavras').text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $('#contador-caracteres').text(qtdCaracteres);

    });
}

function inicializaCronometro(){
    var tempoRestante = $('#tempo-digitacao').text();
    campoDigitacao.one('focus', function(){
        $('#reiniciar-jogo').attr('disabled', true);
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);
            if(tempoRestante < 1){
                campoDigitacao.attr('disabled', true);
                clearInterval(cronometroId);
                $('#reiniciar-jogo').attr('disabled', false);
            }
        },1000);
    });
}

$("#reiniciar-jogo").click(reiniciaJogo);

function reiniciaJogo(){
    campoDigitacao.attr('disabled', false);
    campoDigitacao.val('');
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}