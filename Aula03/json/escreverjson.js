const fs = require('fs');

const dados = {
    nome: 'Giovanne Isaac Marques',
    idade: 21,
    cidade: "Santo André"
}

try {
    // Stringify pode receber 2 argumentos extras, que controlam a formatação da string
    const dadosstr = JSON.stringify(dados, null, 4);

    fs.writeFile('meusdados.json', dadosstr, err => {
        if (err) {
            console.error('Erro ao escrever o arquivo.', err);
            return;
        }

        console.log('Dados gravados com sucesso.');

    });
}
catch (error) {
    console.error('Erro ao converter o JSON para String.', error);
}