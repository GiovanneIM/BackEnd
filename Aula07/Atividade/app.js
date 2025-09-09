// VARIÁVEIS DO SERVIDOR
const { privateDecrypt } = require('crypto');
const express = require('express');
const app = express();
const porta = 3000;


// BIBLIOTECAS E VÁRIAVEIS
const fs = require('fs');
const arqProdutos = 'produtos.json'


// DECLARANDO ROTAS

app.get('/', (req, res) => {
    res.send();
});

app.get('/produtos', (req, res) => {
    fs.readFile(arqProdutos, 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        }

        produtos = JSON.parse(data);

        res.send(produtos);
    });
});

app.get('/produtos/:ID', (req, res) => {
    const ID = Number(req.params.ID);

    fs.readFile(arqProdutos, 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        }

        produtos = JSON.parse(data);

        const produtoProcurado = produtos.find( function (produto) {
            return produto.ID === ID;
        });

        res.send(produtoProcurado);
    });
});


// INICIANDO O SERVIDOR
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});