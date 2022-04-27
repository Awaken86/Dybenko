import { productAPI } from "../api/api";
import { setOneProduct } from "./product-redures";

export function getOneProduct(productId) {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(productId);
        dispatch(setOneProduct(data));
    };
}
