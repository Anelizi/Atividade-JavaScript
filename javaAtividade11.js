// Faça um programa que leia 10 valores informados pelo usuário, calcule, exiba os números
// informados e escreva a média aritmética desses valores lidos.

soma = 0;
cont = 0;

numero = Number(prompt("Digite um número inteiro:"));

for (i = 0; i <= 8; i++) {
    soma = soma + parseFloat(numero);
    cont = cont + 1;
    var numero = prompt("Digite um número inteiro: ");
}

if (cont >= 1) {
    media = soma / cont;
    document.write("A média calculada foi: " + Math.round(media));
}

else {
    document.write("Digite novamente a sequência.")
}