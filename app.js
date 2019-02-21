console.clear();

const argv = require('./config/yargs').argv;
const { createFile, listarTabla } = require('./Multiplicar/multiplicar')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        createFile(argv.base, argv.limite).then(file => console.log('Archivo creado:', `${file}`.green)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}