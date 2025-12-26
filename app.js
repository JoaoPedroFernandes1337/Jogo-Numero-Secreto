let listaNumerosSorteado = [];
let numeroLimite = 10;
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
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
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


// 1. Selecionamos o campo de entrada (input)
let input = document.querySelector('input');

// 2. Adicionamos o "escutador" para quando uma tecla for pressionada (keydown)
input.addEventListener('keydown', function(event) {
    
    // 3. Verificamos se a tecla pressionada foi o "Enter"
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











