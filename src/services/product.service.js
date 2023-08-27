import { productsapp } from "../utils/interceptor";

export const getproducts = async () => {
    console.log("GET PRODUCTS RUNS");
    const axiosResponse = await productsapp.get('https://dummyjson.com/products');
    const products = axiosResponse.data;
    console.log("GET PRODUCTS FINISHED");
    return products;
}
export const getProductDetails = async (productId) => {
    console.log(`GET PRODUCT DETAILS RUNS FOR ID: ${productId}`);
    const axiosResponse = await productsapp.get(`https://dummyjson.com/products/${productId}`);
    const productDetails = axiosResponse.data;
    console.log(`GET PRODUCT DETAILS FINISHED FOR ID: ${productId}`);
    return productDetails;
};
 




