// Faça um programa que exiba os números de 1 (inclusive) a 10 (inclusive) em ordem crescente 

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

document.write(numeros);