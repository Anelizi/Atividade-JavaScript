//Faça um programa que leia um valor informado pelo usuário e imprima todos os valores inteiros entre 1 (inclusive)
// Considere que o número informado será sempre maior que ZERO.

var valor1 = parseInt(prompt("Digite um valor"));

for(var nume = 0; nume < valor1; nume++){
document.write( nume + "<br/>");
}