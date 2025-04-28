const taxaConversaoReal = 6.16;
const taxaConversaoDolar = 1.08;

let valorCreditos = prompt("Digite o valor em Creditos:");

let valorReais = valorCreditos * taxaConversaoReal;
let valorDolares = valorCreditos * taxaConversaoDolar;

alert("Seu dinheiro em Reais é: R$ " + valorReais.toFixed(2) + "\n" + "Seu dinheiro em Dólar é: $ " + valorDolares.toFixed(2));
