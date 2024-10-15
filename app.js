import express from 'express'
import config from './config/config.js'; 
import meteorsRouter from './delivery/meteorsController.js'
import roversRouter from './delivery/roversController.js'
import nunjucks from 'nunjucks'

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.json());
app.use(meteorsRouter);
app.use(roversRouter);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})