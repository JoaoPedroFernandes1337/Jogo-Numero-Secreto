let listaNumerosSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
 exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou, o número secreto é menor!');
            exibirTextoNaTela('p', 'Tente novamente!');     
        } else {
            exibirTextoNaTela('h1', 'Errou, o número secreto é maior!');
            exibirTextoNaTela('p', 'Tente novamente!');               
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let quantidadedeNumerosSorteados = listaNumerosSorteado.length;
    if (quantidadedeNumerosSorteados == numeroLimite) {
        listaNumerosSorteado = [];
    }
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaNumerosSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteado.push(numeroEscolhido);
        console.log(listaNumerosSorteado);
        return numeroEscolhido;
    }
}

let input = document.querySelector('input');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}











