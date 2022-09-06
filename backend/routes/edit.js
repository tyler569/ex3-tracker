import express from 'express';

export const editRouter = express.Router()

editRouter.post('/:combatId', (req, res) => {
  console.log(req.params, req.body)
  res.send(JSON.stringify(req.body))
})