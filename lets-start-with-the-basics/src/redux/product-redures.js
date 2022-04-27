import { productAPI } from "../api/api";

const SET_PRODUCT = 'SET_PODUCT';
const SET_ONE_PRODUCT= 'SET_ONE_PODUCT'

let initialState = {
    product: [],
    selectedItem: {}
};




const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product

            }
        case SET_ONE_PRODUCT: {
            return {
                ...state,
                selectedItem: action.data
            }
        }
        default:
            return state;

    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const setOneProduct = (data) => ({ type: SET_PRODUCT, data })

export const getProduct = (type) => {
    return async (dispatch) => {
        let data = await productAPI.getProduct(type)
        dispatch(setProduct(data));
    };
}
export const getOneProduct = (productId) => {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(productId)
        dispatch(setOneProduct(data));
    };
}

export default ProductReducer;