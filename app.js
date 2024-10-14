import express from 'express'
import config from './config/config.js'; 
import meteorsRouter from './delivery/routes/meteorsRoutes.js'
import nunjucks from 'nunjucks'

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(meteorsRouter);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})