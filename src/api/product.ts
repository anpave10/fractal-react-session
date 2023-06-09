import { axiosProduct } from '../utils/api'

export const getProductsAPI = async () => {
  try {
    const response = await axiosProduct.get('/products')
    console.log('getProductAPe response', response)
    return response.data

  } catch (error) {
    console.error(error)
  }
}