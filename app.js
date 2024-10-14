import express from 'express'
import config from './config/config.js'; 
import { getMeteors } from './controllers/meteors.js';

const app = express()

app.get('/meteors', async (req, res) => { 
  const response = await getMeteors(req, res)
  res.json(response)
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})