const require = require('prompt-sync')();

const nome = prompt('Qual seu nome? ');
console.log(`Ola ${nome}`);

let anodenascimento = prompt('Qual seu ano de nascimento? ');
let idade = 2025 - anodenascimento;

let FezAniversario = prompt('Voce fez aniversario esse ano? (sim/nao)');
if (FezAniversario !== 'sim') {
    idade--;
}
console.log(`Voce tem ${idade} anos`);