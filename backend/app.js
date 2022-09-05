import express from 'express'
import mongoose from 'mongoose'

const app = express()
const attackRouter = express.Router()

mongoose.connect('mongodb://localhost/combattracker')
const db = mongoose.connection

db.on('error', error => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected')
})

attackRouter.post('/', (req, res, next) => {
  console.log(req.body)
  res.send(JSON.stringify(req.body))
})

app.use(express.json())
app.use('/attack', attackRouter)

const { SERVER_PORT: port = 3001 } = process.env

app.listen({ port }, () => {
  console.log(`Server ready at http://0.0.0.0:${port}`)
})