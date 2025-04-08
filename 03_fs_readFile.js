//readFileSync = sincrono

const fs = require('node:fs')


console.log('archivo_1')
const tex = fs.readFileSync('./archivo_01.txt', 'utf-8')
console.log('archivo_01',tex)

console.log('archivo_2')
const tex_2 = fs.readFileSync('./archivo_02.txt', 'utf-8')
console.log('archivo_02',tex_2)



//readFile = a sincrono 
console.log('archivo_1')
fs.readFile('./archivo_01.txt', 'utf-8', (err, text)=>{ //<= esto es un colba
console.log(text)
})


console.log('archivo_2')
fs.readFile('./archivo_02.txt', 'utf-8', (err, text)=>{
    console.log(text)
})
