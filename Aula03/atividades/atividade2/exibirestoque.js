const fs = require('fs')


fs.readFile('estoque.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo: ', err);
        return;
    }

    try {
        const estoque = JSON.parse(data)

        estoque.produtos.forEach(produto => {
            console.log("\nNome:      ", produto.nome );
            console.log("Preço (R$):", produto.preco );
            console.log("Descrição: ", produto.descricao );
            console.log("Categoria: ", produto.categoria );
        });

    }
    catch (error) {
        console.error('Erro ao tratar as informações do arquivo: ', error);
    }
})