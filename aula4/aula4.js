const personagens = [];
const viloes = [];
let forcaPersonagens = 0, forcaViloes = 0;
const viloesPossiveis = ["Kizaru", "Sengoku", "Akainu", "Fujitora", "Barba Negra", "Don Flamingo"];

for (let i = 0; i < 3; i++) {
  personagens.push(prompt(`Digite o nome do seu personagem ${i + 1}:`));
  forcaPersonagens += Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 3; i++) {
  viloes.push(viloesPossiveis[Math.floor(Math.random() * viloesPossiveis.length)]);
  forcaViloes += Math.floor(Math.random() * 6) + 1;
}

console.log("Personagens:", personagens);
console.log("Vilões:", viloes);

if (forcaPersonagens > forcaViloes) {
  alert(`Os piratas venceram! Força: ${forcaPersonagens}`);
} else if (forcaPersonagens < forcaViloes) {
  alert(`Vitória da Marinha... Força: ${forcaViloes}`);
} else {
  alert("Houve empate!");
}
