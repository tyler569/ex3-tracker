import express from 'express';

export const attackRouter = express.Router()

attackRouter.post('/', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify(req.body))
})