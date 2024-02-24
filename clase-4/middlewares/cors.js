import cors from 'cors'

const whitelist = [
    'http://localhost:3000',
    'http://localhost:8080',
    'https://movies.com',
    'https://ari.com'
    ]

export const corsMiddleware = ({ acceptedWhiteList = whitelist} = {}) =>
    cors({
        origin: (origin, callback) => {

            if(acceptedWhiteList.includes(origin)) {
                return callback(null, true)
            }

            if(!origin) {
                return callback(null, true)
            }

            return callback(new Error('Not allowed by CORS'))
        }
    })
