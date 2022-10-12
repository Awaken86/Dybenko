const ADD_TO_BASKET = 'ADD_TO_BASKET'
const SET_BASKET = 'SET_BASKET'

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
        case SET_BASKET: {
            return {
                ...state,
                basket: action.newBasket
            }
        }
        default:
            return state;

    }
}
export const actions = {
    addToBasket: (selectedItem, countItem) => ({ type: ADD_TO_BASKET, selectedItem, countItem }),
    setBasket: (newBasket) => ({ type: SET_BASKET, newBasket })
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
    return async (dispatch) => {
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            //dispatch(actions.addToBasket(selectedItem, countItem))
            let FindAndChangeCount = basket.filter((obj) => {
                if (JSON.stringify(obj) === JSON.stringify(arrObj)) {
                    obj.countItem = count
                }
                return obj
            })
            dispatch(actions.setBasket(FindAndChangeCount))
        }
    }
}


export default BasketReducer;