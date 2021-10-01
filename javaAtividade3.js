// Faça um programa para ler 3 valores(considere que não serão informados valores iguais)
// e escrever o maior deles.

var numero1 = Number(prompt("Qual o primeiro número?"));
var numero2 = Number(prompt("Qual o segundo número?"));
var numero3 = Number(prompt("Qual o terceiro número?"));

if (numero1 > numero2 && numero3) {
    document.write("O primeiro número informado é o maior!");
} else if (numero2 > numero1 && numero3) {
    document.write("O segundo número informado é o maior!");
} else if (numero3 > numero2 && numero1) {
    document.write("O terceiro número informado é o maior!");
} else {
    document.write("Os valores são iguais.");
}