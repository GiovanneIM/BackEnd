const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Digite uma frase: \n- ', frase => {
    const palavras = frase.trim().split(' ');
    const numPalavras = palavras.length;
    console.log('\nA frase inserida tem', numPalavras, 'palavras.');

    rl.close();
});
