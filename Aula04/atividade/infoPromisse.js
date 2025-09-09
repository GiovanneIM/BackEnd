const fs = require('fs').promises;
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


fs.readFile('config.json', 'utf8')
.then( data => {
    return JSON.parse(data);    // Retornando o JSON
})
.then ( configs => {
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
.catch(err => {
    console.error('Erro: ', err);
});
