import asteroids  from './application/services/NasaClient.js'
import express  from 'express'
import config from './config/config.js'; 


const app = express()
console.log(config.apiKey)


app.get('/', async (req, res) => {
  await asteroids();
  res.send('Hello World!')
})


app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})