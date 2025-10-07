const prompt = require('prompt-sync')();

function clienteNomes(nome) {
    cliente = nome
    console.log(`Olá ${cliente}`);
    
    return cliente

}

clienteNomes(prompt('Qual seu nome? '))