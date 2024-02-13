const path = require('node:path')

//barra espaciadora de carpetas segun se sistema operativo
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/ari-folder/passwords.txt')
console.log(base)

const filename = path.basename('/tmp/ari-folder/password.txt', 'txt')
console.log(filename)

const extension = path.extname('/tmp/ari-folder/password.txt')
console.log(extension)