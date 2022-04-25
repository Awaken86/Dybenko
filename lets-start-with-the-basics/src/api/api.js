import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api'
})
export const productAPI = {
    getProduct() {
        return instance.get(`/product`)
            .then(response => {
                return response.data;
            });
            
    },
    getProductByType(type) {
        return axios.get(`http://localhost:3001/api/product?type=${type}`)
    }
}