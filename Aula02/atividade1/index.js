/*
    Crie um programa Node.js que coleta informações sobre o sistema operacional atual
    e as salve em um arquivo chamado infosistema.txt.
*/

const fs = require('fs');
const os = require('os');


const nomeArquivo = 'infoSistema.txt'

criarArquivo()

adicionarAoArquivo(`SISTEMA OPERACIONAL : ${os.type()}\n`)
adicionarAoArquivo(`PLATAFORMA : ${os.platform()}\n`)
adicionarAoArquivo(`ARQUITETURA : ${os.arch()}\n`)
adicionarAoArquivo(`VERSÃO : ${os.version()}\n`)
adicionarAoArquivo(`MEMÓRIA TOTAL : ${os.totalmem()}b\n`)
adicionarAoArquivo(`MEMÓRIA LIVRE : ${os.freemem()}b\n`)
adicionarAoArquivo(`CPUs : \n ${JSON.stringify(os.cpus())}\n`)



function criarArquivo () {
    fs.writeFile(nomeArquivo, '', err => {
        if (err) throw err;
        console.log("Arquivo criado.");
    });
}

function adicionarAoArquivo (info) {
    fs.appendFile(nomeArquivo, info, err => {
        if (err) throw err;
    });
}