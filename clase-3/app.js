const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies')
const cors = require('cors')
const { validateMovie, validatePartialMovie } = require('./schemes/movies')

const app = express()
app.use(express.json())
app.use(cors({
    origin: (origin, callback) => {
        const whitelist = [
        'http://localhost:3000',
        'http://localhost:8080',
        'https://movies.com',
        'https://ari.com'
        ]

        if(whitelist.includes(origin)) {
            return callback(null, true)
        }

        if(!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
}))
app.disable('x-powered-by')

// Get all movies
app.get('/movies', (req, res) => {
    const { genre }= req.query;
    if(genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(gen => gen.toLowerCase() === genre.toLowerCase())
        );
        return res.json(filteredMovies);
    }
    res.json(movies);
})

// Get a movie by id
app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.filter(movie => movie.id === id);
    movie ? res.json(movie) : res.status(404).json({ error: 'Movie not found' });
});

// Create a new movie
app.post('/movies', (req, res) => {

    const result = validateMovie(req.body);

    if(result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }

    movies.push(newMovie);
    res.status(201).json(newMovie); // update the client cache
})

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body);

    if(result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if(movieIndex < 0) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie;
    return res.json(updateMovie);
})

app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if(movieIndex < 0) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    movies.splice(movieIndex, 1);
    return res.json({ message: 'Movie deleted' });
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})