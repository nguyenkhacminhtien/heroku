import express from 'express';
import bodyParser  from 'body-parser'
import routers from './routes/router';
const app = express()

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routers(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})