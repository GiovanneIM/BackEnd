const fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo: ', err);
        return;
    }

    const configs = JSON.parse(data);       // JSON
    const infos = Object.keys(configs);     // Chaves

    // Exibindo opções
    console.log("\n► Qual informação deseja?\n")
    infos.forEach( (key, index) => {
        console.log(` [${index}] ${key}`);
    });

    // Obtendo opção do usuário e exibindo a informação
    rl.question("\n- ", resp => {
        console.log("\n► " + configs[infos[resp]]);

        rl.close();
    })
})
