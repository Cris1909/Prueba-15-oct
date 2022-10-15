const { leerArchivo } = require("./lectorArchivo.js")

personas = leerArchivo();
personas.pop();
let contador = 0;

personas.forEach((element) => {
    if(parseInt(element[2]) >= 18){
        contador++;
    }
});

console.log(`\n La cantidad de personas mayores de edad es: ${contador}`)