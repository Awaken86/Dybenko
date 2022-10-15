
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const SET_BASKET = 'SET_BASKET'

let initialState = {
    basket: []
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            return {
                // ...state,
                // basket: []
                ...state, basket: [action.selectedItem, ...state.basket]
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
    addToBasket: (selectedItem) => ({ type: ADD_TO_BASKET, selectedItem }),
    setBasket: (newBasket) => ({ type: SET_BASKET, newBasket })
}

export const addToBasket = (Auth, selectedItem, countItem, basket) => {
    return async (dispatch) => {
        const newSelectedItem = {
            id: selectedItem._id,
            price: selectedItem.price,
            title: selectedItem.title,
            picture: selectedItem.picture,
            countItem: countItem
        }
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            let findDuplicate = basket.filter((obj) => {
                console.log(obj, newSelectedItem)
                if (obj.id === newSelectedItem.id) {
                    newSelectedItem.countItem = obj.countItem + countItem
                    return obj
                } else {
                    return null
                }
            })
            if (findDuplicate.length !== 0) {
                updateBasket(Auth, basket, newSelectedItem, newSelectedItem.countItem)
                    (console.log("1 updateBasket"))
            } else {
                dispatch(actions.addToBasket(newSelectedItem))
                    (console.log("2 addToBasket"))
            }
        }

    }
}
export const updateBasket = (Auth, basket, arrObj, NewCount) => {
    debugger
    console.log("updateBasket")
    return async (dispatch) => {
        let newBasket
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        }
        else {
            //dispatch(actions.addToBasket(selectedItem, countItem))
            let FindAndChangeCount = basket.filter((obj) => {
                if (obj.id === arrObj.id) {
                    console.log(obj.countItem, NewCount)
                    obj.countItem = NewCount
                }
                return obj.countItem !== null
            })
            newBasket = FindAndChangeCount
        }
        dispatch(actions.setBasket(newBasket))
    }
}


export default BasketReducer;