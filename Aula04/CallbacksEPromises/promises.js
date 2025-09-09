/* Caso se importe todo o módulo fs, usa-se o readline do promises da seguinte forma:*/
// const fs = require('fs');
// fs.promises.readfile('arquivo.txt', 'utf8')

/* É possível importar apenas a parte promises do módulo fs*/
const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
.then(data => {
    console.log('Conteúdo do arquivo:\n', data);
})
.catch(err => {
    console.error('Erro ao ler arquivo: ', err);
});

console.log('Esta linha será executada antes do término da leitura do arquivo.');
