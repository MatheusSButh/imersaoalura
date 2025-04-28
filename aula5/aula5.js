const perguntas = [
  { pergunta: "Qual seleção venceu a Copa do Mundo de 2002?", respostas: ["Brasil", "Alemanha", "Argentina"], correta: 0 },
  { pergunta: "Qual jogador ganhou a Bola de Ouro em 2021?", respostas: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski"], correta: 0 }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0, acertos = 0;

function carregarPergunta() {
  const { pergunta, respostas, correta } = perguntas[indiceAtual];
  perguntaElemento.textContent = pergunta;
  progressoElemento.textContent = `${indiceAtual + 1}/${perguntas.length}`;
  respostasElemento.innerHTML = respostas.map((resposta, i) => `<button class='botao-resposta' onclick='verificarResposta(${i === correta})'>${resposta}</button>`).join("");
}

function verificarResposta(correto) {
  if (correto) acertos++;
  indiceAtual++ < perguntas.length - 1 ? carregarPergunta() : finalizarJogo();
}

function finalizarJogo() {
  textoFinal.textContent = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
