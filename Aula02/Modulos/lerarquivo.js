const fs = require('fs');


// O readfile lê o arquivo do caminho (Argumento 1) com a codificação (Argumento 2)
// Após tentar ler o arquivo, executa a arrow function (err, data) (Argumento 3)
// data armazena o conteúdo lido no arquivo.
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});