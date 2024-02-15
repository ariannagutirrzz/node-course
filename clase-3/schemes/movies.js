const zod = require('zod');

// For validations we can use a library like Zod or Joi
  const movieSchema = zod.object({
    title: zod.string( {
        'message': 'Title is required and must be a string.'
    }),
    director: zod.string(),
    genre: zod.array(zod.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-fi', 'Fantasy', 'Thriller', 'Terror', 'Crime'])),
    duration: zod.number().min(1),
    year: zod.number().int().min(1900).max(2024),
    rate: zod.number().min(0).max(10).default(5),
    poster: zod.string({
        'message': 'Poster is required and must be a url.'
    }).url()
});

function validateMovie(input) {
    return movieSchema.safeParse(input);
}

function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input);
}

module.exports = {
    validateMovie, validatePartialMovie
}