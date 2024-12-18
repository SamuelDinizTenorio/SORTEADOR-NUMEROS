// Função para sortear números aleatórios dentro de um intervalo
function sortear() {
    // Obtém a quantidade de números a serem sorteados, convertendo para inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // Obtém o limite inferior do intervalo, convertendo para inteiro
    let de = parseInt(document.getElementById('de').value);
    // Obtém o limite superior do intervalo, convertendo para inteiro
    let ate = parseInt(document.getElementById('ate').value);
  
    // Verifica se o limite inferior é menor que o limite superior
    if (de > ate) {
      // Exibe um alerta informando que o intervalo é inválido
      alert(`ERRO! O número ${de} é maior que ${ate}!`);
      // Interrompe a função
      return;
    }
  
    // Verifica se a quantidade de números a serem sorteados não excede o tamanho do intervalo
    if (quantidade > (ate - de + 1)) {
      // Exibe um alerta informando que a quantidade de números é inválida
      alert(`ERRO! A quantidade de números sorteados é maior que o intervalo de números selecionados!`);
      // Interrompe a função
      return;
    }
  
    // Cria um array vazio para armazenar os números sorteados
    let soteados = [];
    // Variável para armazenar o número sorteado temporariamente
    let numero;
  
    // Loop para sortear a quantidade de números especificada
    for (let i = 0; i < quantidade; i++) {
      // Gera um número aleatório dentro do intervalo
      numero = gerarNumeroAleatorio(de, ate);
  
      // Enquanto o número já foi sorteado, gera um novo número
      while (soteados.includes(numero)) {
        numero = gerarNumeroAleatorio(de, ate);
      }
  
      // Adiciona o número sorteado ao array de números sorteados
      soteados.push(numero);
    }
  
    // Exibe os números sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${soteados}</label>`;
  }
  
  // Função para gerar um número aleatório entre min e max
  function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }
  
  // Obtém o elemento do botão de reiniciar
  let botaoReiniciar = document.getElementById('btn-reiniciar');
  
  // Função para alterar o status do botão de reiniciar
  function alterarStatusBotao() {
    // Verifica se o botão está desabilitado
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
      // Remove a classe de desabilitado e adiciona a classe de habilitado
      botaoReiniciar.classList.remove('container__botao-desabilitado');
      botaoReiniciar.classList.add('container__botao');
    } else {
      // Remove a classe de habilitado e adiciona a classe de desabilitado
      botaoReiniciar.classList.remove('container__botao');
      botaoReiniciar.classList.add('container__botao-desabilitado');
    }
  }
  
  // Função para reiniciar os campos de entrada e o status do botão
  function reiniciar() {
    // Limpa os campos de entrada
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    // Altera o status do botão de reiniciar
    alterarStatusBotao();
  }