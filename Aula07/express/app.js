// Declarando variáveis 
const express = require('express');
const app = express();
const porta = 3000;


// Rotas
app.get('/', (req, res) => {
    res.send('Página inicial do meu primeiro WEB SERVER');
});

app.get('/usuarios', (req, res) => {
    res.send('Lista de Usuários.');
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.send('Detalhes do usuário de ID: ' + id);
});


// Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});