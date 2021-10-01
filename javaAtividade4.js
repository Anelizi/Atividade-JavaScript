// Faça um programa que leia 3 valores (considere que não serão informados valores iguais)
// e escrever a soma dos 2 maiores.

var numero1 = Number(prompt("Qual o primeiro número?"));
var numero2 = Number(prompt("Qual o segundo número?"));
var numero3 = Number(prompt("Qual o terceiro número?"));
var soma;

if (numero3 < numero1 && numero1 < numero2) {
    soma = numero1 + numero2;
    document.write("A soma será" + "\n" + soma);
} else if (numero2 < numero1 && numero1 < numero3) {
    soma = numero1 + numero3;
    document.write("A soma será" + "\n" + soma);
} else if (numero1 > numero3) {
    soma = numero1 + numero2;
    document.write("A soma será" + "\n" + soma);
}
else {
    soma = numero2 + numero3;
    document.write("A soma será" + "\n" + soma);
}