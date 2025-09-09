const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8')
.then( data => {
    console.log('\nConteúdo do arquivo: \n- ' + data);
    return data.toUpperCase();
})
.then ( dataMaiusculo => {
    console.log('\nConteúdo do arquivo em maiúsculo: \n- ' + dataMaiusculo);
    return dataMaiusculo.toLowerCase();
})
.then( dataMinusculo => {
    console.log('\nConteúdo do arquivo em minúsculo: \n- ' + dataMinusculo);
    return dataMinusculo.split(' ');
})
.then( dataPalavras => {
    console.log('\nNúmero de palavras: \n- ' + dataPalavras.length);
})
.catch(err => {
    console.error('Erro: ', err);
});
