import dotenv from 'dotenv'

dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    apiUri: process.env.NASA_URI,
    apiKey: process.env.API_KEY
}

export default config;