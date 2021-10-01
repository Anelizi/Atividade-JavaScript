// Faça um programa que leia 10 números informados pelo usuário e ao final da leitura 
// escrever a soma total dos 10 números lidos. 

numero = 0;
soma = 0;

for (i = 1; i <= 10; i++) {
    var numero = Number(prompt("Digite um número inteiro: "));
    soma = soma + numero;
}

document.write("Soma total dos 10 valores inseridos:" + "\n" + soma);