import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:27017/api'
})
export const productAPI = {

    getProduct(type, color, selectedPrice) {
        return instance.get(`/product?type=${type}&color=${color}&maxSelected=${selectedPrice.maxPrice}&minSelected=${selectedPrice.minPrice}`)
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