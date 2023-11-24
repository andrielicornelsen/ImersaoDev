function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var linkTrailer = prompt("Insira o link do trailer do filme:");
  
  var filmesSalvos = JSON.parse(localStorage.getItem('filmes')) || [];
  
  filmesSalvos.push({ filme: filmeFavorito, trailer: linkTrailer });
  
  /*localStorage Salva os filmes*/
  localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
  atualizarListaFilmes();
  document.getElementById('filme').value = '';
}

function carregarFilmesSalvos() {
  var filmesSalvos = JSON.parse(localStorage.getItem('filmes')) || [];
  
  /*atualizar a lista de filmes na página já salvos*/
  if (filmesSalvos.length > 0) {
    filmesSalvos.forEach(function(filme) {
      var elementoListaFilmes = document.getElementById('listaFilmes');
      var imagemComLink = '<a href="' + filme.trailer + '" target="_blank"><img src="' + filme.filme + '"></a>';
      elementoListaFilmes.innerHTML += imagemComLink;
    });
  }
}

function atualizarListaFilmes() {
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  carregarFilmesSalvos(); /*carregar novamente os filmes já salvos*/
}

carregarFilmesSalvos();