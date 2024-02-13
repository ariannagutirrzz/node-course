const { Console } = require('node:console');
const os = require('node:os');

console.log("System operative info: ")
console.log("----------------------")

console.log("Platform: " + os.platform())
console.log("Version: " + os.release())
console.log("Architecture: " + os.arch())
console.log("CPU: " + os.cpus()[0].model)
console.log("Cores: " + os.cpus().length)
console.log("Free memory: " + os.freemem() / 1000000 + " MB")
console.log("Memory: " + os.totalmem() / 1000000 + " MB")

console.log('uptime', os.uptime() / 60 /60 + " hours")