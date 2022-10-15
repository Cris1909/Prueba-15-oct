const { leerArchivo } = require("./lectorArchivo.js")

personas = leerArchivo();
personas.pop();
let contadorHombres = 0;
let contadorMujeres = 0;

personas.forEach((element) => {
    if(element[3] === "hombre"){
        contadorHombres++;
    } else if (element[3] === "mujer"){
        contadorMujeres++;
    }
});

console.log(`\n La cantidad Hombres es: ${contadorHombres}`)
console.log(`\n La cantidad Mujeres es: ${contadorMujeres}`)