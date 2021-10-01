// Faça um programa que leia dois valores informados pelo usuário e exiba uma das três
// mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’,
// caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que 
// o primeiro.  

var numero1 = Number(prompt("Qual o primeiro número?"));
var numero2 = Number(prompt("Qual o segundo número?"));

if (numero1 > numero2) {
    document.write("Primeiro é maior.");
} else if (numero2 > numero1) {
    document.write("Segundo é maior.");
} else {
    document.write("Números iguais.");
}