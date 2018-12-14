var frase = $('.frase').text();
var numPalavras = frase.split(' ').length;

var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

var campoDigitacao = $('.campo-digitacao');
campoDigitacao.on('input', function(){
    var conteudo = campoDigitacao.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $('#contador-palavras').text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $('#contador-caracteres').text(qtdCaracteres);

});

var tempoRestante = $('#tempo-digitacao').text();
campoDigitacao.one('focus', function(){
    
    var cronometroId = setInterval(function(){
        tempoRestante--;
        $('#tempo-digitacao').text(tempoRestante);
        if(tempoRestante < 1){
            campoDigitacao.attr('disabled', true);
            clearInterval(cronometroId);
        }
    },1000);


    //console.log('Ah danado! Não clicou né? Mas te peguei mesmo assim!');
});
