import { Product } from './productSlice'
import { User } from './userSlice'

export interface AppStore {
    user: User,
    product: Product
}