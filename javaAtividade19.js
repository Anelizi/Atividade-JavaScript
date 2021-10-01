//  Refazer o programa de troca de valores que estava em portugol para JavaScript

var a = parseInt(prompt("Digite o valor (numérico) da variável A:"));
var b = parseInt(prompt("Digite o valor (numérico) da variável B:"));

var troca = a
a = b
b = troca

document.write("O novo valor de A é: " + a);
document.write("<br>");
document.write("O novo valor de B é: " + b);