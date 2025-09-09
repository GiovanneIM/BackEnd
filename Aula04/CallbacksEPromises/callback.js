const fs = require('fs');

const VERDE     = '\u001b[32m';
const AMARELO   = '\u001b[33m';
const NORMAL    = '\u001b[m';

fs.readFile("arquivo.txt", 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler arquivo: ", err);
        return;
    }

    console.log(AMARELO + "Conteúdo do arquivo:\n", data + NORMAL);
});

console.log(VERDE + "Esta linha será executada antes do término da leitura do arquivo." + NORMAL);
