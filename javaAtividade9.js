// Faça um programa que imprima os 10 primeiros números inteiros maiores que 100.

for (i = 1; i <= 11; i++) {
    var numero = Number(prompt("Digite um número inteiro: "));
    if (numero > 100) {
        i = i + 1;
        document.write(numero + " ");
    }
}