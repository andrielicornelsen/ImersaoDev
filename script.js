function adicionarVitoria(index) {
  insereAbatesEMortes(index);
  listaDePersonagens[index].vitoria++;
  listaDePersonagens[index].pontos += 3;
  atualizaTela();
}

function adicionarDerrota(index) {
  insereAbatesEMortes(index);
  listaDePersonagens[index].derrota++;
  atualizaTela();
}

function adicionarEmpate(index) {
  insereAbatesEMortes(index);
  listaDePersonagens[index].empate++;
  listaDePersonagens[index].pontos++;
  atualizaTela();
}

function insereAbatesEMortes(index) {
  var numeroVidas = parseInt(prompt("Quantas vidas conseguiu nesse jogo?"));
  var numeroMortes = parseInt(prompt("Quantas vezes morreu nesse jogo?"));
  listaDePersonagens[index].vidas += numeroVidas;
  listaDePersonagens[index].mortes += numeroMortes;
}

function removerPersonagem(index) {
  listaDePersonagens.splice(index, 1);
  atualizaTela();
}

function apagarLista() {
  listaDePersonagens = [];
  atualizaTela();
}

function atualizaTela() {
  // a tela inicia vazia
  elementoTabela.innerHTML = "";

  // em cada elemento "jogador" do array listaDePersonagens
  // o forEach vai executar a ação dentro do bloco
  listaDePersonagens.forEach((jogador, index) => {
    console.log(jogador);

    // atualiza as informações dentro do HTML
    // o uso da crase ativa o template string que permite uso de HTML e JavaScript
    elementoTabela.innerHTML += `
      <tr>
          <td>${jogador.nome}</td>
          <td><img src="${jogador.imagem}"></td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.vidas}</td>
          <td>${jogador.mortes}</td>
          <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
          <td><button onClick="removerPersonagem(${index})">Remover</button></td>
       </tr>        
    `;
  });
}

function adicionarPersonagem() {
  var nomePersonagem = document.getElementById("nome").value;
  var imagemPersonagem = document.getElementById("imagem").value;
  listaDePersonagens.push({
    nome: nomePersonagem,
    imagem: imagemPersonagem,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    vidas: 0,
    mortes: 0
  });
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
  atualizaTela();
}

var listaDePersonagens = [];
// trazendo o HTML para o JavaScript
var elementoTabela = document.getElementById("tabelaJogadores");

// ao objeto podem ser atribuídas várias informações
// para acessar os dados do objeto:
// alert(jogador1.vitoria);

atualizaTela();

// Função para salvar os dados no localStorage
function salvarDados() {
  localStorage.setItem(
    "listaDePersonagens",
    JSON.stringify(listaDePersonagens)
  );
}

// Função para carregar os dados do localStorage, se existirem
function carregarDados() {
  const dadosSalvos = localStorage.getItem("listaDePersonagens");
  if (dadosSalvos) {
    listaDePersonagens = JSON.parse(dadosSalvos);
    atualizaTela();
  }
}

// trazendo o HTML para o JavaScript
var elementoTabela = document.getElementById("tabelaJogadores");

// ao objeto podem ser atribuídas várias informações
// para acessar os dados do objeto:
// alert(jogador1.vitoria);

carregarDados(); // Carregar os dados salvos ao carregar a página

atualizaTela();