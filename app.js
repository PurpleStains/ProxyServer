import express from 'express'
import config from './config/config.js'; 
import meteorsRouter from './delivery/routes/meteorsRoutes.js'

const app = express()

app.use(meteorsRouter);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})