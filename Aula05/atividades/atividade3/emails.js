const emails = [
    'teste@gmail.com',
    'contato@google.com',
    'admin@outlook.com',
    'suporte@google.com'
]

const emailsGoogle = emails.filter( email => {
    if (email.includes('@google.com')){
        return true;
    }
});

console.log(emailsGoogle);
