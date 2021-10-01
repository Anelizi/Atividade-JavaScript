// Faça um programa que receba dois números reais e mostre 
// um menu de opções (Subtrair, Somar, Multiplicar e Dividir), realizando a operação de acordo com a opção escolhida no menu e mostrando o resultado.

var escolha = parseInt(prompt('Selecione uma opção: \n (1) Soma \n (2) Subtração \n (3) Multiplicação \n (4) Divisão'));
var n1 = Number(prompt("Qual o primeiro número?"));
var n2 = Number(prompt("Qual o segundo número?"));

switch (escolha) {
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    default:
        erro();
        break
}

function soma() {
    soma = n1 + n2;
    document.write("Resultado da soma: " + soma);
}

function subtracao() {
    subtracao = n1 - n2;
    document.write("Resultado da subtração: " + subtracao);
}

function multiplicacao() {
    multiplicacao = n1 * n2;
    document.write("Resultado da multiplicação: " + multiplicacao);
}

function divisao() {
    divisao = n1 / n2;
    document.write("Resultado da divisão: " + divisao);
}

function erro() {
    document.write("NaN");
}