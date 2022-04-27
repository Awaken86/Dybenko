import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api'
})
export const productAPI = {
    getProduct(type) {
        return instance.get(`/product?type=${type}`)
            .then(response => {
                return response.data;
            });
            
    },
    getOneProduct(productId) {
        return instance.get(`product/` + productId);

    }
}