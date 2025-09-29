//criando constante para receber o express
const express = require('express');
//criando aplicação express
const app = express();

const produtos = ['Notebook', 'Mouse', 'Teclado'];

app.get ('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.js com Express!')
})

app.get ('/produtos', (req, res) => {
     let html = '<ul>';
    html += '<li>Notebook</li>';
    html += '<li>Mouse</li>';
    html += '<li>Teclado</li>';
  
    html += '</ul>';
    res.send(html);
})
app.get ('/produto/:id', (req, res) => {
    const id_produto = req.params.id;
    const ProdutoSel = produtos[id_produto];
    
    if (ProdutoSel == undefined) {
        res.send('Produto não encontrado');
       
    } else {
         res.send(`visualizando o perfil do produto ${ProdutoSel}`);}

})

app.get ('/menu', (req, res) => {
    let html = '<ul>';
    html += '<li><a href="/">Home</a></li>';
    html += '<li><a href="/produtos">Produtos</a></li>';
    html += '<li><a href="/total/1/100/2">Total</a></li>';
    html += '</ul>';
    res.send(html);
})



app.get ('/produto/:id_produto/:preco', (req, res) => {
    const id_produto = req.params.id_produto;
    const preco = req.params.preco;
    const ProdutoSel = produtos[id_produto];
    
    if (ProdutoSel == undefined) {
        res.send('Produto não encontrado');
       
    } else {
         res.send(`visualizando o perfil do produto ${ProdutoSel} com preço ${preco}`);}

})

app.get ('/total/:id_produto/:preco/:quantidade', (req, res) => {
    const id_produto = req.params.id_produto;
    const preco = req.params.preco;
    const quantidade = req.params.quantidade;
    const ProdutoSel = produtos[id_produto];
    const total = preco * quantidade
    
    if (ProdutoSel == undefined) {
        res.send('Produto não encontrado');
       
    } else {
         res.send(`visualizando o perfil do produto ${ProdutoSel} com preço ${preco} e quantidade ${quantidade}, tudo custou ${total.toFixed(2)}`)};})

const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})