const os = require("os");

console.log(`Plataforma: ${os.platform()}`);
console.log(`Arquitetura: ${os.arch()}`);

console.log('CPUs:', os.cpus()); // O Template String não concatena Objects
console.log(`Número de CPUs: ${os.cpus().length}`);



console.log(`hostname: ${os.hostname()}`);
console.log(`homedir: ${os.homedir()}`);
