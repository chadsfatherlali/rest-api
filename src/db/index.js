import mongoose from 'mongoose'

import Users from './models/users'

const models = {}
const init = async () => {
  await mongoose.connect(process.env.DATABASE_URL)

  models.Users = Users
}

const db = {
  init,
  models
}

export default db
