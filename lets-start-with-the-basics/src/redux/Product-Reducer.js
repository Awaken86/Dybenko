import { productAPI } from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const SET_ONE_PRODUCT = 'SET_ONE_PRODUCT'
const SET_COLOR_FILTER = 'SET_COLOR_FILTER'
const SET_MIN_PRICE = 'SET_MIN_PRICE'
const SET_MAX_PRICE = 'SET_MAX_PRICE'

let initialState = {
    product: [],
    selectedItem: [],
    colorProduct: 'withoutFilter',
    actualType: '',
    maxPrice: 0,
    minPrice: 0
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
        case SET_MIN_PRICE: {

            return {
                ...state,
                minPrice: action.minPrice
            }
        }
        case SET_MAX_PRICE: {

            return {
                ...state,
                maxPrice: action.maxPrice
            }
        }
        default:
            return state;

    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const setOneProduct = (oneProduct) => ({ type: SET_ONE_PRODUCT, oneProduct })
export const setColorFilter = (colorProduct) => ({ type: SET_COLOR_FILTER, colorProduct })
export const setMaxPrice = (maxPrice) => ({ type: SET_MAX_PRICE, maxPrice })
export const setMinPrice = (minPrice) => ({ type: SET_MIN_PRICE, minPrice })

export const getProduct = (type, color) => {
    return async (dispatch) => {
        let data = await productAPI.getProduct(type, color)
        dispatch(setProduct(data.products));
        dispatch(setMaxPrice(data.maxPrice))
        dispatch(setMinPrice(data.minPrice))
    }
};


export const getOneProduct = (url) => {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(url)
        dispatch(setOneProduct(data));
    };
}

export default ProductReducer;