//Requires
const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {
    console.log(`Tabla de Multiplicar del ${base}`.green);
    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base*x}`);
    }
}

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        data += `Tabla de Multiplicar del ${base}\n`;
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`Tablas/Tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`Tabla-${base}.txt`);
        });
    })
}

module.exports = {
    createFile,
    listarTabla
}