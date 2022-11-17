
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const SET_BASKET = 'SET_BASKET'
const CLEAN_OUT_BASKET = 'CLEAN_OUT_BASKET'

let initialState = {
    basket: []
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            if (action.basket?.length > 0) {
                return { ...state, basket: [action.selectedItem, ...state.basket] }
            }
            else {
                return { ...state, basket: [action.selectedItem] }
            }
        }
        case SET_BASKET: {
            return {
                ...state,
                basket: action.newBasket
            }
        }
        case CLEAN_OUT_BASKET: {
            return {
                ...state,
                basket: {}
            }
        }
        default:
            return state;
    }
}
export const actions = {
    addToBasket: (selectedItem, basket) => ({ type: ADD_TO_BASKET, selectedItem, basket }),
    setBasket: (newBasket) => ({ type: SET_BASKET, newBasket }),
    cleanOutBasket: () => ({ type: CLEAN_OUT_BASKET })
}

export const addToBasket = (selectedItem, countItem) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        const Auth = (getState().AuthPage.auth)
        let newSelectedItem = {
            id: selectedItem._id,
            price: selectedItem.price,
            title: selectedItem.title,
            picture: selectedItem.picture,
            countItem: countItem,
            forPayment: false
        }
        let NewCount
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            let findDuplicate = basket?.filter((obj) => {
                if (obj.id === newSelectedItem.id) {
                    NewCount = obj.countItem + countItem
                    return obj
                } else {
                    return null
                }
            })
            if (findDuplicate?.length > 0) {
                dispatch(updateBasket(Auth, basket, newSelectedItem, NewCount))
            } else {
                dispatch(actions.addToBasket(newSelectedItem, basket))
            }
        }

    }
}
export const updateBasket = (arrObj, NewCount, ChangeForPayment) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        const Auth = (getState().AuthPage.auth)
        let newBasket
        if (Auth === true) {
            //let basket = await productAPI.getBasket(basket,productId)
            //dispatch(actions.setBasket(basket))
        } else {
            //изменить forPayment у всех товаров
            if (ChangeForPayment === "AllChange") {
                let changeForPayment = basket.filter((obj) => {
                    obj.forPayment = !obj.forPayment
                    return obj
                })
                newBasket = changeForPayment
            }
            //удалить выбранное
            if (ChangeForPayment === "DeleteSelected") {
                let changeForPayment = basket.filter((obj) => {
                    console.log(obj)
                    return obj.forPayment !== true
                })
                newBasket = changeForPayment
            }
            //изменить forPayment
            if (ChangeForPayment === 'true') {
                let changeForPayment = basket.filter((obj) => {
                    if (obj.id === arrObj.id) {
                        obj.forPayment = !obj.forPayment
                    }
                    return obj
                })
                newBasket = changeForPayment
            }
            //изменить количество
            if (NewCount === null || NewCount > 0) {
                //dispatch(actions.addToBasket(selectedItem, countItem))
                let FindAndChangeCount = basket.filter((obj) => {
                    if (obj.id === arrObj.id) {
                        obj.countItem = NewCount
                    }
                    return obj.countItem !== null
                })
                newBasket = FindAndChangeCount
            }
        }
        dispatch(actions.setBasket(newBasket))
    }
}
export const cleanOutBasket = () => {
    return async (dispatch) => {
        dispatch(actions.cleanOutBasket())
    }
}

export default BasketReducer;