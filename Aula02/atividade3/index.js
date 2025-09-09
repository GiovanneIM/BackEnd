/*
    Crie um programa que solicita ao usuario o nome de um arquivo de origem 
    e o nome de um arquivo de destino

    o programa deve copiar o conteudo do arquivo de origem para o arquivo de destino

    exiba uma mensagem indicando se a copia foi bem sucedida ou se ocorreu algum erro
*/


// MÓDULOS
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


// EXECUÇÃO
readline.question('Insira o nome do arquivos de origem: ', origem => {

    // Lendo o arquivo de origem
    fs.readFile(origem, 'utf8', (err, data) => {

        if (err) throw err;

        readline.question('Insira o nome do arquivos de destino: ', destino => {
            // Escrevendo no arquivo de destino
            fs.writeFile(destino, data, err => {
                if (err) throw err;

                console.log('Conteúdo Copiado');
            });
        });
    });

    readline.close();
});