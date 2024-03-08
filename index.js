// 1) Observe o trecho de código abaixo:
// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA? 91

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k
}
console.log('o valor da soma é:' + soma); // A SOMA E 91


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(numero) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] <= numero) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);
    }
    if (fibonacci.includes(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }
}

let numeroInformado = 55;
console.log(fibonacci(numeroInformado));

// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

let stringOriginal = "Paralelepipedo";
let stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);