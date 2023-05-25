import axios from "axios"

export const getProductsAPI = async () => {
    console.log("getproductsapi")
    try {
        return await axios.get("https://dummyjson.com/products")

    } catch (error) {
        console.error(error)
    }
}