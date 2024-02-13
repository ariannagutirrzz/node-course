const http = require('node:http')
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // routes
    if (req.url === '/') {
        res.statusCode = 200
        res.end('<h1>Home</h1>')
    } else if (req.url === '/imagen'){
        fs.readFile('./michis.png', (err, data) => {
            res.setHeader('Content-Type', 'image/png')
            if (err) {
                res.statusCode = 500
                res.end(' 500 Internal Server Error')
                console.log('Imagen enviada', data)
                console.log('Error', err)
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else if (req.url === '/contact') {
        res.statusCode = 200
        res.end('<h1>Contact</h1>')
    } else {
        res.statusCode = 404
        res.end('<h1>Not Found</h1>'
    )}
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server running on port http://localhost:${desiredPort}`)
})
