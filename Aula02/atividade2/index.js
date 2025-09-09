/*
    Crie um programa Node.js que crie, ou adicione novas informações (nomes)
    fornecidas pelo usuário para criar uma lista de sala de aula em um arquivo TXT.
*/


// MÓDULOS
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


// FUNÇÃO
// Função para adicionar nomes
function adicionarNome() {
    readline.question("- ", resp => {
        // Encerrando o programa
        if (resp == 0) {
            console.log('\nLista salva');
            readline.close();
        }
        else {
            // Adicionando o nome à lista
            fs.appendFile('lista.txt', resp + '\n', err => {
                if (err) throw err;
            });

            // Usando recursão para continuar à adicionar nomes
            adicionarNome();
        }
    })
}

// EXECUÇÃO
console.log("Insira os nomes para adicionar à lista. \nDigite '0' para sair.\n");
adicionarNome();