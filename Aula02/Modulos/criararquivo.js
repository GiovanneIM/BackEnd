const fs = require('fs');


const conteudo = "Esse é o primeiro arquivo da 2MD-GM"

// O writeFile escreve o arquivo do caminho (Argumento 2) no arquivo (Argumento 1)
// se o arquivo não existe, ele é criado.
// Após tentar escrever no arquivo, executa a arrow function err (Argumento 3)
fs.writeFile('arquivo.txt', conteudo, err => {
    // O throw encerra o programa exibindo o err
    if (err) throw err;
    console.log('Arquivo Criado');

    // Equivalente a:
    // if (err)
    //     console.log(err);
    // else
    //     console.log('Arquivo criado');
});