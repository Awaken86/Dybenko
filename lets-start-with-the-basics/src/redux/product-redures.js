import { productAPI } from "../api/api";

const SET_PODUCT = 'SET_PODUCT';

let initialState = {
    product: []

};




const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PODUCT:
            
        return {
                ...state,
                product: action.product
                
            }
        default:
            return state;
            
    }
}

export const setProduct = (product) => ({ type: SET_PODUCT, product })

export const getProduct = () => {
    return async (dispatch) => {
        let data = await productAPI.getProduct()
        dispatch(setProduct(data));
    };
}

export default ProductReducer;