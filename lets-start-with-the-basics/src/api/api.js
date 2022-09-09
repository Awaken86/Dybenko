import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api'
})
export const productAPI = {
    getProduct(type,color) {
        return instance.get(`/product?type=${type}&color=${color}`)
            .then(response => {
                return response.data;
            });

    },
    getOneProduct(url) {
        return instance.get(url)
            .then(response => {
                return response.data;
            });
    }
}