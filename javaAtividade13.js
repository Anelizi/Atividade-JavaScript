//  Faça um programa que leia 10 números que o usuário vai informar. Todos os números lidos
//  com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.

numero = 0;
soma = 0;

for (i = 1; i <= 10; i++) {
    var numero = Number(prompt("Digite um número inteiro: "));
    if (numero < 40) {
        soma = soma + numero;
    }
}

document.write("Por você adicionar números inferiores a 40, a soma deles será " + soma);