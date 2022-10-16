const fs = require("fs");

const leerArchivo = () => {
    let datos = fs.readFileSync('./personas/persona.csv', "utf-8");
    let personasSeparadas = datos.split("/");
    let arrayPersonas = []

    for(let i = 0; i < personasSeparadas.length; i++){
        arrayPersonas.push(personasSeparadas[i].split(","))
    }
    return arrayPersonas;
}

module.exports ={
    leerArchivo
}
