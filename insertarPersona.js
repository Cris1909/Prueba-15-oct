require("colors")
const fs = require("fs");
const argv = require("./config/yargs.js")
const { leerArchivo } = require("./lectorArchivo.js")

const crearPersona = async(nombre, edad, sexo) => {
    try{

        let datos = fs.readFileSync('./personas/persona.csv', "utf-8");
        let personasSeparadas = datos.split("/");
        let arrayPersonas = []
    
        let persona = `${datos},${nombre},${edad},${sexo}/`
        fs.writeFileSync("./personas/persona.csv", persona);

        console.log(`El nombre ingresado fue: ${nombre}`);
        console.log(`La edad ingresada fue: ${edad}`);
        console.log(`El sexo ingresado fue: ${sexo}`);

    } catch (error) {
        throw error;
    }
}

crearPersona(argv.n, argv.e, argv.s)
    /*.then(nombreArchivo => console.log(`${nombreArchivo.magenta.bold} creado`))
    .catch(err => console.log(err));*/