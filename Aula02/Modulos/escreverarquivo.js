const fs = require('fs');

const novoConteudo = "\n\nAdicionando texto ao arquivo"

// O appendFile escrece, no arquivo no caminho (Argumento 1), o conteudo (Argumento 2).
// Após tentar escrever no arquivo, executa a arrow function err (Argumento 3)
fs.appendFile('arquivo.txt', novoConteudossssssssss, (err) => {
    if (err) throw err;
    console.log('Texto adicionao ao arquivo');
})