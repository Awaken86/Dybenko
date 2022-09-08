import { productAPI } from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const SET_ONE_PRODUCT = 'SET_ONE_PRODUCT'
const SET_COLOR_FILTER = 'SET_COLOR_FILTER'
const SET_ACTUAL_TYPE = 'SET_ACTUAL_TYPE'

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
        case SET_ACTUAL_TYPE: {
            return {
                ...state,
                actualType: action.actualType
            }
        }
        default:
            return state;

    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const setOneProduct = (oneProduct) => ({ type: SET_ONE_PRODUCT, oneProduct })
export const setColorFilter = (color) => ({ type: SET_COLOR_FILTER, color })
export const setActualType = (type) => ({ type: SET_ACTUAL_TYPE, type })

export const getProduct = (type) => {
    return async (dispatch) => {

        if (initialState.colorProduct !== "withoutFilter") {
            let data = await productAPI.getProduct(type)
            dispatch(setProduct(data));
        } else {
            let data = await productAPI.getProduct(type, initialState.colorProduct)
            dispatch(setProduct(data));
        }
    };
}
export const getActualType = (type) => {
    return async (dispatch) => {
        dispatch(setActualType(type))
    }
}
export const getOneProduct = (url) => {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(url)
        dispatch(setOneProduct(data));
    };
}

export default ProductReducer;