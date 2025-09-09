const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("\nDigite o nome do arquivo JSON que deseja ler: \n- ", resp => {

    fs.readFile(resp + '.json', 'utf8', (err, data) => {
        if (err) {
            console.error('\nErro ao ler o arquivo: ', err);
            return;
        }
    
        try {
            const dados = JSON.parse(data);
            console.log('\nDados lidos do arquivo: \n', dados);
        }
        catch (error) {
            console.error('\nErro ao conveter dados: \n', error);
        }
    });

    readline.close();
})