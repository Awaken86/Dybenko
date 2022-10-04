import { productAPI } from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const SET_ONE_PRODUCT = 'SET_ONE_PRODUCT'
const SET_COLOR_FILTER = 'SET_COLOR_FILTER'
const SET_MIN_PRICE = 'SET_MIN_PRICE'
const SET_MAX_PRICE = 'SET_MAX_PRICE'
const SET_SELECTED_PRICES = 'SET_SELECTED_PRICE'

let initialState = {
    product: [],
    selectedItem: [],
    colorProduct: 'withoutFilter',
    actualType: '',
    maxPrice: 0,
    minPrice: 0,
    selectedPrice: {}
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
        case SET_SELECTED_PRICES: {
            return {
                ...state,
                selectedPrice: action.selectedPrice
            }
        }
        default:
            return state;

    }
}
export const actions = {
    setProduct: (product) => ({ type: SET_PRODUCT, product }),
    setOneProduct: (oneProduct) => ({ type: SET_ONE_PRODUCT, oneProduct }),
    setColorFilter: (colorProduct) => ({ type: SET_COLOR_FILTER, colorProduct }),
    setMaxPrice: (maxPrice) => ({ type: SET_MAX_PRICE, maxPrice }),
    setMinPrice: (minPrice) => ({ type: SET_MIN_PRICE, minPrice }),
    setSelectedPrice: (selectedPrice) => ({ type: SET_SELECTED_PRICES, selectedPrice })
}

export const getProduct = (type, color, selectedPrice) => {
    return async (dispatch) => {
        let data = await productAPI.getProduct(type, color,selectedPrice)
        dispatch(actions.setProduct(data.products));
        dispatch(actions.setMaxPrice(data.maxPrice))
        dispatch(actions.setMinPrice(data.minPrice))
    }
};


export const getOneProduct = (url) => {
    return async (dispatch) => {
        let data = await productAPI.getOneProduct(url)
        dispatch(actions.setOneProduct(data));
    };
}

export default ProductReducer;