import {
  Schema,
  model
} from 'mongoose'

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  cc: Number
})

const Users = model('Users', userSchema)

export default Users
