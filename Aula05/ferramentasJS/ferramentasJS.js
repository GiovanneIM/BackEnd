/* MODIFICADORES DE SAÍDA */
const AMARELO   = '\u001b[33m';
const VERMELHO  = '\u001b[31m';
const NORMAL    = '\u001b[m';
const NEGRITO   = '\u001b[1m';

// FERRAMENTAS DE STRINGS
console.log(AMARELO + NEGRITO + '\nFerramentas para STRINGS' + NORMAL);



// LENGTH
console.log(VERMELHO + NEGRITO + '\nLENGTH' + NORMAL);
const senha = '12345'
if (senha.length < 8) {
    console.log("Sua senha precisa ter no mínimo 8 carácteres");
}


// SPLIT
console.log(VERMELHO + NEGRITO + '\nSPLIT' + NORMAL);
const tags = 'nodejs,javascript,backend,api'
const arraydetags = tags.split(',');
console.log(arraydetags);
console.log(`Você enviou ${arraydetags.length} tags.`);


// LOWERCASE E UPPERCASE
console.log(VERMELHO + NEGRITO + '\nLOWER E UPPER' + NORMAL);
const emailEnviado = 'Teste@Email.COM';
const emailPadronizado = emailEnviado.toLocaleLowerCase();
console.log(emailPadronizado);


// TRIM
console.log(VERMELHO + NEGRITO + '\nTRIM' + NORMAL);
const nomeComEspaços = '    João Silva ';
const nomeLimpo = nomeComEspaços.trim();
console.log(`Nome original: '${nomeComEspaços}' \nNome limpo: '${nomeLimpo}'`);


// INCLUDES
console.log(VERMELHO + NEGRITO + '\nINCLUDES' + NORMAL);
const email = 'contato@meusite.com';
if (email.includes('@')) {
    console.log('Parece ser um e-mail válido');
}
else {
    console.log("E-mail inválido");
}





// FERRAMENTAS DE ARRAYS
console.log(AMARELO + NEGRITO + '\n\nFerramentas para ARRAYS' + NORMAL);



// LENGTH
console.log(VERMELHO + NEGRITO + '\nLENGTH' + NORMAL);


// JOIN
console.log(VERMELHO + NEGRITO + '\nJOIN' + NORMAL);
const tagsArray = ['react','nodejs','typescript'];
const stringDeTags = tagsArray.join(',')
console.log(tagsArray);
console.log(stringDeTags);


// MAP
console.log(VERMELHO + NEGRITO + '\nMAP' + NORMAL);
const numeros = [1,2,3,4,5];
const numDobrados = numeros.map(function (num) {
    return num * 2    
});
console.log('Números: ', numeros);
console.log('Números dobrados: ', numDobrados);


// FILTER
console.log(VERMELHO + NEGRITO + '\nFILTER' + NORMAL);
const idades = [15, 22, 18, 34, 17];
const maioresDeIdade = idades.filter( function (idade) { return idade >= 18 } );
console.log('Idades: ', idades);
console.log('Maiores: ', maioresDeIdade);


// FIND
console.log(VERMELHO + NEGRITO + '\nFIND' + NORMAL);
const usuarios = [
    {id: 1, nome: "Ana"}, 
    {id: 2, nome: "Bruna"}, 
    {id: 3, nome: "Carlos"}
];
const usuarioEncontrado = usuarios.find( function (usuario) {
    return usuario.id === 2
});
console.log(usuarios);
console.log(usuarioEncontrado);
