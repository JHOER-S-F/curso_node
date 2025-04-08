//promeas 

const fs = require('node:fs/promises')

console.log('archivo_1')
fs.readFile('./archivo_01.txt', 'utf-8')
.then(text => {
    console.log('text_1', text)
})


console.log('archivo_2')
fs.readFile('./archivo_02.txt', 'utf-8')
.then(text =>{
    console.log('text_2', text)
})
