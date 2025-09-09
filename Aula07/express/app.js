// Declarando variáveis 
const express = require('express');
const app = express();
const porta = 3000;


// Rotas
app.get('/', (req, res) => {})



// Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});