// A Loja Remi du Fromage está com uma promoção onde cada capacete artesanal para 
// tartaruga custa R$18.230 e pode ser pago em até 15 vezes sem juros. Crie um programa onde 
// o usuário possa informar o valor parcelas que deseja pagar e exiba o valor de cada parcela.

var preco = 18230;
var parcela = Number(prompt("Digite o número de parcelas, sendo até 15 vezes sem juros:"));
var valor = 0;

valor = preco / parcela;

document.write("O valor total do produto é: " + preco + " você escolheu pagar em " + parcela + " vezes e o valor será de:" + valor);