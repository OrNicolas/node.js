//criando constante para receber o express
const express = require('express');
//criando aplicação express
const app = express();

// const pgPrincipal = (req, res) => {
//     res.send('Bem vindo ao servidor Node.js com Express!')
// }

//rota principal
app.get('/', (req, res)  => {
    res.send('Bem vindo ao servidor Node.js com Express! 123455')
})
app.get('/sobre', (req, res)  => {
    res.send('Página sobre')
})
app.get ('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    
    if (usuarioSel == undefined) {
        res.send('Usuário não encontrado');
       
    } else {
         res.send(`visualizando o perfil do usuário ${usuarioSel}`);}

})
app.get ('/soma/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const soma = n1 + n2;
    res.send(`A soma de ${n1} e ${n2} é ${soma}`);
})

const usuarios = ['jose', 'maria', 'joao']
app.get('/usuarios', (req, res) => {
    let html = '<h1>Lista de usuários</h1>';
    html += '<ul>';
    for (let usuario of usuarios) {
        html += `<li>${usuario}</li>`;
    }
    html += '</ul>';
    res.send(html);

   

})
app.get('/menu', (req, res) => {
    let html = '<ul>';
    html += '<li><a href="/">Home</a></li>';
    html += '<li><a href="/sobre">Sobre</a></li>';
    html += '<li><a href="/usuarios">Usuários</a></li>';
    html += '<li><a href="/usuario/1">Usuário 1</a></li>';
    html += '<li><a href="/soma/10/20">Soma</a></li>';
    html += '</ul>';
    res.send(html);
})

const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})


