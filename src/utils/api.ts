import axios from 'axios'

const URLDummyAPI = import.meta.env.VITE_REACT_APP_URL_DUMMY_BASE

export const axiosProduct = axios.create({
  baseURL: URLDummyAPI
})

axiosProduct.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(
    (error.response) || 'SERVER ENCOUNTER AN ERRROR'
  )
)