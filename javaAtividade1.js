// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor 
// informado é positivo, negativo ou zero. 

var numero = Number(prompt("Insira um número"));

if (numero > 0) {
    document.write("Este número é positivo.");
} else if (numero < 0) {
    document.write("Este número é negativo.");
} else {
    document.write("Nulo.");
}