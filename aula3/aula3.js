let venceu = true;
let rodada = 1;

while (rodada <= 3 && venceu) {
  let escolha = prompt(`Rodada ${rodada}\nEscolha o vidro: 1, 2 ou 3`);
  
  if (!["1", "2", "3"].includes(escolha)) {
    alert("Escolha inválida.");
    venceu = false;
  } else {
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
    
    if (escolha == pisoQuebrado) {
      alert("Você perdeu.");
      venceu = false;
    } else {
      alert("Você passou!");
    }
  }
  rodada++;
}

if (venceu) {
  alert("Você passou todas as rodadas!");
} else {
  alert("Você perdeu!");
}
