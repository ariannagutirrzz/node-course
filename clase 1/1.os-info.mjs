import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log("System operative info: ")
console.log("----------------------")

console.log("Platform: " + platform())
console.log("Version: " + release())
console.log("Architecture: " + arch())
console.log("CPU: " + cpus()[0].model)
console.log("Cores: " + cpus().length)
console.log("Free memory: " + freemem() / 1000000 + " MB")
console.log("Memory: " + totalmem() / 1000000 + " MB")

console.log('uptime', uptime() / 60 /60 + " hours")