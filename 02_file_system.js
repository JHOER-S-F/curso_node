const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),         // ¿Es un archivo?
    stats.isDirectory(),    // ¿Es un directorio?
    stats.isSymbolicLink(), // ¿Es un enlace simbólico?
    stats.size              // Tamaño en bytes
);
