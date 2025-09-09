const dados = {
    "nome": "João Da Silva",
    "idade": 30,
    "endereço": {
        "rua": "Rua Principal, 123",
        "cidade": "São Paulo"
    },
    "telefones": [
        "11-1234-5678", 
        "11-9876-5432"
    ],
    "ativo": true,
    "nulo": null
}


console.log(dados.nome);
dados.nome = "Rafael";
console.log(dados.nome);

console.log(dados.endereço.rua);

console.log("Telefones: ");

// forEach
dados.telefones.forEach(telefone => {
    console.log("•", telefone);
});



