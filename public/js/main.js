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
