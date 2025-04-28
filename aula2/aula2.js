function jogar() {
  idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Você não pode jogar (Restrição de idade)");
  }


  if (idade >= 18) {
    escolhaJogador = prompt("Digite 1- Pedra, 2- Papel ou 3- tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) {
      alert("Empate");
    }

    if (escolhaJogador == 1) {
      if (escolhaComputador == 2) {
        
        alert("Computador venceu.");
      }
      if (escolhaComputador == 3) {
        
        alert("Você venceu.");
      }
    }
    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        alert("Você venceu.");
      }
      if (escolhaComputador == 3) {
       
        alert("Computador venceu.");
      }
    }
    if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        alert("Computador venceu.");
      }
      if (escolhaComputador == 2) {
        alert("Você venceu.");
      }
    }
    alert("escolhaComputador:" + escolhaComputador);
  }
}
