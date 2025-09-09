const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// o readline.question imprime na interface a pergunta (Argumento 1),
// depois recebe uma entrada e a armazena na variavel (Argumento 2)
readline.question('Qual é seu nome? ', nomeUsuario => {
    console.log(`Olá, ${nomeUsuario}, bom dia.`);

    // Para o readline Assíncrono, é necessário fechar o uso, para que a interface não fique sempre aberta
    readline.close();
});