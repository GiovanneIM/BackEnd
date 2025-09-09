const dados = {
    alunos: [
        {nome: 'Ana', numeroChamada: 1},
        {nome: 'Anna', numeroChamada: 2},
        {nome: 'Arthur', numeroChamada: 3},
        {nome: 'Beatriz', numeroChamada: 4}
    ]
};

dados.alunos.forEach(aluno => {
    console.log(`Nome do aluno(a): ${aluno.nome}, Nº da chamada: ${aluno.numeroChamada}`);
});