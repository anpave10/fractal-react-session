import { UserBase } from '../models/user'

export const createUserAdapter = (user: UserBase) => ({
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email
})