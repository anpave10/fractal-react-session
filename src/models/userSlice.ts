import { UserBase } from './user'

export interface User extends UserBase {
    id: string
    accessToken: string
}