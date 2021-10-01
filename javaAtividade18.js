//A Wesley Peças Automotivas calcula o preço de venda dos seus produtos com uma margem de
// aumento x%. Portanto, construa um algoritmo em Javascript que, dados o valor de custo e a margem de aumento, imprima o preço de venda. 
//O usuário deve informar tanto o valor do produto quanto a margem de lucro.

var valor = parseInt(prompt("Insira o valor do produto:"));
var margem = parseInt(prompt("Insira a margem de lucro do produto:"));

preco = (valor * margem) + valor;

document.write("O preço de venda do produto será de R$ " + preco);