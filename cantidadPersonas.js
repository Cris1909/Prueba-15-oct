const { leerArchivo } = require("./lectorArchivo.js")

personas = leerArchivo();
personas.pop();

console.log(`\n La cantidad de personas es: ${personas.length}`)