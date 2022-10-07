const ADD_TO_BASKET = 'ADD_TO_BASKET'

let initialState = {
    basket: [{
        id: 1,
        price: 1000,
        title: 'shota',
        picture: 'qwe.png',
        countItem: 1
    }],
    userEmail: 'dasads@mail.ru'
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const createProductCell = {
                id: action.selectedItem.id,
                price: action.selectedItem.price,
                title: action.selectedItem.title,
                picture: action.selectedItem.picture,
                countItem: action.countItem
            }
            return {
                // ...state,
                // basket: [createProductCell, ...state.basket]
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
            console.log(123)
        }
        dispatch(actions.addToBasket(selectedItem, countItem))
        //let basket = await productAPI.getBasket(basket,productId)
        //dispatch(actions.setBasket(basket))

    };
}


export default BasketReducer;