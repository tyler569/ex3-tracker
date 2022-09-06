import express from 'express'
import mongoose from 'mongoose'

import { attackRouter } from './routes/attack.js'
import { editRouter } from './routes/edit.js'

const app = express()

mongoose.connect('mongodb://localhost/combattracker')
const db = mongoose.connection

db.on('error', error => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected')
})

app.use(express.json())
app.use('/attack', attackRouter)
app.use('/edit', editRouter)

const { SERVER_PORT: port = 3001 } = process.env

app.listen({ port }, () => {
  console.log(`Server ready at http://0.0.0.0:${port}`)
})