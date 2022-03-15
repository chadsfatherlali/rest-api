import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users/index'
import db from './db'

db.init()
  .then(() => 'OK::DB')
  .catch(() => 'KO::DB')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', usersRoutes(db.models))

app.get('/health', (req, res) => {
  res.send('OK')
})

export default app
