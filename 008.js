const prompt = require('prompt-sync')();

while (true) {
  const usuario = prompt('Digite o usuario: ');
  const senha = prompt('Digite a senha: ');

  if (usuario === 'admin' && senha === '1234') {
    console.log(`Bem vindo ${usuario}`);
    break;
  } else if (usuario !== 'admin' && senha === '1234') {
    console.log('Usuario desconhecido');
  } else if (usuario === 'admin' && senha !== '1234') {
    console.log('Senha incorreta');
  } else {
    console.log('Usuario e senha incorretos');
  }
}
