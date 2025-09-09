const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Digite seu nome de usuário : \n- ', nomeInserido => {
    const nomeLimpo = nomeInserido.trim();
    const nomeMinusculo = nomeLimpo.toLocaleLowerCase();

    // Verificando tamanho
    if (nomeInserido.length <= 5) {
        console.log('\nNome inválido: O nome de usuário deve ter mais de 5 letras.');
    }
    // Verificando espaços
    else if (nomeLimpo != nomeInserido) {
        console.log('\nNome inválido: O nome de usuário não pode conter espaços no início ou final.');
    }
    // Verificando maiúsculas
    else if (nomeMinusculo != nomeLimpo) {
        console.log('\nNome inválido: O nome de usuário pode conter letras maiusculas.');
    }
    // O nome é válido
    else {
        console.log(`\n'${nomeMinusculo}' é um nome válido`); 
    }

    rl.close();
})