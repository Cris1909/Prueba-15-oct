const { number } = require('yargs');

const argv = require('yargs')
                .option("n", {
                    alias: "nombre",
                    type: "String",
                    demandOption: true,
                    describe: "Nombre de la persona"
                })
                .option("e", {
                    alias: "edad",
                    type: "number",
                    demandOption: true,
                    describe: "Edad de la persona"
                })
                .option("s", {
                    alias: "sexo",
                    type: "String",
                    demandOption: true,
                    describe: "Sexo de la persona"
                })
                .check((argv, options) => {
                    if(isNaN(argv.e)){
                        throw "La edad debe ser un numero"
                    }
                    return true;
                })
                .argv;

module.exports = argv;