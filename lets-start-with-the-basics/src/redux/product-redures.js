import { productAPI } from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const SET_ONE_PRODUCT = 'SET_ONE_PRODUCT'
const SET_COLOR_FILTER = 'SET_COLOR_FILTER'

let initialState = {
    product: [],
    selectedItem: [],
    colorProduct: '',
    actualType: ''
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
                selectedItem: action.oneProduct
            }

        }
        case SET_COLOR_FILTER: {

            return {
                ...state,
                colorProduct: action.colorProduct
            }
        }
        default:
            return state;

    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const setOneProduct = (oneProduct) => ({ type: SET_ONE_PRODUCT, oneProduct })
export const setColorFilter = (color) => ({ type: SET_COLOR_FILTER, color })

export const getProduct = (type) => {
    return async (dispatch) => {
        let data = await productAPI.getProduct(type)
        dispatch(setProduct(data));
    }
};


export const getOneProduct = (url) => {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(url)
        dispatch(setOneProduct(data));
    };
}

export default ProductReducer;