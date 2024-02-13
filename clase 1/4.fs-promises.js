const fs = require('node:fs/promises'); //a partir de node 16 se recomienda colocar node:

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => { 
        console.log('primer texto:', text)
    })

console.log("proceso fuera del bucle asincrono")
console.log('leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto: ', text)
})