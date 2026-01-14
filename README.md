<h1 align="center"> Jogo do Número Secreto 🔢 </h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-CONCLUÍDO-green" alt="Status Concluído">
  <img src="https://img.shields.io/badge/Linguagem-JavaScript-yellow" alt="Linguagem JS">
</p>

## 📝 Descrição

Este é um jogo de lógica clássico desenvolvido para treinar conceitos de **Lógica de Programação** e manipulação do **DOM** (Document Object Model). 

O objetivo do jogador é descobrir um número aleatório gerado pelo sistema entre 1 e 100. A cada tentativa, o jogo fornece dicas visuais e auditivas informando se o número secreto é maior ou menor do que o chute realizado.

## 🔨 Funcionalidades

- **Geração de números aleatórios:** O sistema escolhe um número secreto a cada rodada.
- **Feedback visual e sonoro:** O jogo "fala" com o usuário utilizando a biblioteca *ResponsiveVoice*, garantindo acessibilidade e interatividade.
- **Contador de tentativas:** Monitora quantos chutes foram necessários para acertar.
- **Interatividade:** É possível enviar o chute clicando no botão ou pressionando a tecla `Enter`.
- **Reinício:** Botão de "Novo Jogo" que reseta o estado da aplicação sem recarregar a página.

## 💻 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do projeto.
- **CSS3:** Estilização (arquivo `style.css`).
- **JavaScript:** Lógica do jogo, manipulação do DOM e controle de fluxo.
- **ResponsiveVoice:** Biblioteca externa para síntese de voz (Text-to-Speech).

## 📂 Estrutura do Projeto

O código principal está dividido em funções para facilitar a manutenção e leitura:
- `gerarNumeroAleatorio()`: Cuida da lógica matemática e verificação de lista.
- `verificarChute()`: Compara a entrada do usuário com o número secreto.
- `exibirTextoNaTela()`: Função genérica para injetar texto no HTML e ativar a voz.
- `reiniciarJogo()`: Restaura as variáveis para o estado inicial.

## 🚀 Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone [[https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)](https://github.com/JoaoPedroFernandes1337/Jogo-Numero-Secreto.git)
  
 2. Abra o arquivo index.html no seu navegador de preferência.

Nota: Para que a função de voz funcione corretamente, é necessário estar conectado à internet, pois a biblioteca ResponsiveVoice carrega scripts externos.
