// Refazer o programa de média que estava em portugol para JavaScript
// como desenvolver este código em Javascript?

var nota1 = Número(prompt("Qual a primeira nota?" ));
var nota2 = Número(prompt("Qual a segunda nota?" ));
var media;

mídia = (nota1 + nota2) / 2;

if (mídia >= 7) {
    document.write("Aprovado com média" + "\n" + mídia);
} else {
    document.write("Reprovado com média" + "\n" + mídia);
}