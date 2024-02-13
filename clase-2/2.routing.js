const http = require('node:http')

const processRequest = (req, res) => {




const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server running on port http://localhost:3000`)
})

}