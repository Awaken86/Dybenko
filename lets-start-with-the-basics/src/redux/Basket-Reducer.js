const ADD_TO_BASKET = 'ADD_TO_BASKET'

let initialState = {
    basket: [],
    userEmail: ''
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const createProductCell = {
                id: action.selectedItem._id,
                price: action.selectedItem.price,
                title: action.selectedItem.title,
                picture: action.selectedItem.picture,
                countItem: action.countItem
            }
            return {
                // ...state,
                // basket: []
                ...state, basket: [createProductCell, ...state.basket]
            }
        }
        default:
            return state;

    }
}
export const actions = {
    addToBasket: (selectedItem, countItem) => ({ type: ADD_TO_BASKET, selectedItem, countItem })
}

export const addToBasket = (Auth, selectedItem, countItem) => {
    return async (dispatch) => {
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            dispatch(actions.addToBasket(selectedItem, countItem))
        }
    }
}
export const updateBasket = (Auth, basket, arrObj, count) => {
    debugger
    return async (dispatch) => {
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            //dispatch(actions.addToBasket(selectedItem, countItem))
            let fitration = obj.cart.filter(i => JSON.stringify({ fieldId: i.fieldId }) ===
                JSON.stringify({ fieldId: data.fieldId })) // сверяем fielId
        }
    }
}


export default BasketReducer;