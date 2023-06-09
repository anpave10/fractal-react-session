export interface User {
    email: string
    id: string
    accessToken: string
    firstName: string
    lastName: string
}
export const UserInitialState = {
  email: '',
  id: '',
  accessToken: '',
  firstName: '',
  lastName: ''
}