var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 0;

/* se o chute for igual a....*/

while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000')
  //se o chute for igual ao número secreto
  tentativas++;
  
  if (chute == numeroSecreto) {
     alert('Acertou em ' + tentativas + ' tentativas!');
    break; 
  } else {
    var diferenca = Math.abs(numeroSecreto - chute);

    if (diferenca <= 10) {
    alert('Quase! Tente novamente.');
  } else if(chute > numeroSecreto) {
    alert('Errou...o número secreto é menor!')
  } else if (chute < numeroSecreto) {
    alert('Errou...o número secreto é maior!')
  } 
  } }