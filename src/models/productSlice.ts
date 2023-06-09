export interface Product {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: never[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}
export const ProductInitialState = {
  brand: '',
  category: '',
  description: '',
  discountPercentage: 0,
  id: 0,
  images: [],
  price: 0,
  rating: 0,
  stock: 0,
  thumbnail: '',
  title: ''
}