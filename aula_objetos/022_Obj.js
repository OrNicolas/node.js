let produto = {
    nome : 'Celular',
    preco : 2000,
    marca : 'Samsung',
    quebrado : false
}



console.log(produto.nome);

//--------------------------------------------------------------


for(let chave in produto){
    console.log(chave);
    console.log(produto[chave]);
} 
// 