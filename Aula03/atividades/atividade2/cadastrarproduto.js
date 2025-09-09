const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

fs.readFile('estoque.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo: ', err);
        return;
    }

    try {
        // Convertendo o conteúdo lido
        const estoque = JSON.parse(data);

        // Iniciando o cadastro
        console.log("Cadastrando produtos, digite '0' para parar.");
        cadastrarProduto(estoque)
    }
    catch (error) {
        console.error('Erro ao tratar as informações do arquivo: ', error);
    }
});


function cadastrarProduto(estoque) {
    readline.question("\nNome: ", nome => {
        // Salvando a lista
        if (nome == 0) {
            fs.writeFile('estoque.json', JSON.stringify(estoque), (err) => {
                if (err) throw err;
                console.log('\nLista salva');
                readline.close();
            });
        }
        // Adicionando produtos à lista
        else {

            readline.question("Preço: ", preco => {
                readline.question("Descrição: ", descricao => {
                    readline.question("Categoria: ", categoria => {
                        estoque.produtos.push({
                            "nome": nome,
                            "preco": Number(preco),
                            "descricao": descricao,
                            "categoria": categoria
                        });

                        // Usando recursão para continuar cadastrando
                        cadastrarProduto(estoque);
                    });
                });
            });

        }
    });
}
