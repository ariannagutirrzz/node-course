const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')

// Disable the header that is use to know the technology that is using the server
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.use(express.json()) // This middleware will parse the body of the request if it is a JSON, instead of doing it manually

// app.use((req, res, next) => {
//     if (req.method !== 'POST' ) return next() 
//     if (req.headers['content-type'] !== 'application/json') return next()

//     // In this body will be stored the data that is coming from the request
//     let body = ''

//     // Listen the data event to get the body
//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     // Listen the end event (meaning that we received all the data) to parse the body
//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp = Date.now()
//         req.body = data
//         next()
//     })
// })

app.get('/', (req, res) => {
    res.send('Home for pokemon API')
})

// Get a pokemon by name
app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

//  Create a new pokemon
app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

// 404 Not Found
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1')
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})
