const dataMySQL = '2025-09-02 08:09:09';

const datahoraVetor = dataMySQL.split(' ');

const datahoraObjeto = {
    "data": datahoraVetor[0].replaceAll('-', '/'),
    "hora": datahoraVetor[1]
};

console.log(datahoraObjeto);
