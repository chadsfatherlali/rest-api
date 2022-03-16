import express from 'express'

const users = express.Router()

const usersRoutes = (models) => {
  users.get('/users', async (req, res) => {
    try {
      const result = await models.Users
        .find()

      res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  users.get('/users/:id', async (req, res) => {
    try {
      const result = await models.Users
        .findOne({ _id: req.params.id })

      res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  users.post('/users', async (req, res) => {
    try {
      const result = await models.Users
        .create(req.body)

      res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  users.patch('/users/:id', async (req, res) => {
    try {
      const result = await models.Users
        .updateOne({ _id: req.params.id }, { $set: req.body })

      res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  users.delete('/users/:id', async (req, res) => {
    try {
      const result = await models.Users
        .deleteOne({ _id: req.params.id })

      res.json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  return users
}
export default usersRoutes
