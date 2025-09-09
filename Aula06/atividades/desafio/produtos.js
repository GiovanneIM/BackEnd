const fs = require('fs').promises;

const arquivoCSV = 'produtos.csv'
const arquivoJSON = 'produtos.json'


fs.readFile(arquivoCSV, 'utf8')
.then(data => {
    // Separando as linhas do arquivo CSV
    const dataLinhas = data.replaceAll('\r','').split('\n');

    const chaves = dataLinhas[0].split(',')     // Array com as chaves das informações dos produtos
    const produtos = dataLinhas.slice(1);       // Array com as informações dos produtos

    const arrayProdutos = []      // Array para armazenar os objetos com as informações de cada produto

    // Criando e adicionando os objetos de produtos ao arrayProdutos
    produtos.forEach( produto => {
        const infosProduto = produto.split(',');
        const objProduto = {};

        for (let i = 0; i < infosProduto.length; i++) {
            objProduto[chaves[i]] = infosProduto[i];
        }

        arrayProdutos.push(objProduto);
    });
    
    // Ordenando o vetor com os objetos de produtos pelo atributo nome dos objetos
    arrayProdutos.sort( (a, b) => {
        /*
            Descrição: 
                O método localeCompare() compara duas strings e retorna um valor indicando se
                a string de de referência vem antes, depois ou se é igual a string de comparação.

            Uso: 
                • string1.localeCompare(string2)

            Retorno: 
                • Negativo se a string1 vem antes da string2
                • Positivo se a string1 vem depois da string2
                • 0 se as strings são equivalentes
        */
        return a['Nome'].localeCompare(b['Nome']);
    })
    
    console.log('\nArray com os produtos ordenado pelo nome: \n', arrayProdutos);

    fs.writeFile(arquivoJSON, JSON.stringify(arrayProdutos))
})
.catch(err => { console.error("Erro:", err); })



