import { UserAPI } from "../api/api"

const SET_BASKET = 'SET_BASKET'
const CLEAN_OUT_LOCAL_BASKET = 'CLEAN_OUT_LOCAL_BASKET'

let initialState = {
    basket: [],
    selectedAllProducts: false
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BASKET: {
            return {
                ...state,
                basket: action.newBasket
            }
        }
        case CLEAN_OUT_LOCAL_BASKET: {
            return {
                ...state,
                basket: []
            }
        }
        default:
            return state;
    }
}
export const actions = {
    setBasket: (newBasket) => ({ type: SET_BASKET, newBasket }),
    cleanOutLocalBasket: () => ({ type: CLEAN_OUT_LOCAL_BASKET })
}

export const addToBasket = (selectedItem, countItem) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        const Auth = (getState().AuthPage.Auth)
        const userId = (getState().AuthPage.User.id)
        let basketItem = {
            id: selectedItem._id,
            price: selectedItem.price,
            title: selectedItem.title,
            picture: selectedItem.picture,
            countItem: countItem,
            forPayment: false
        }
        let duplicate = basket?.filter((obj) => {
            if (obj.id === basketItem.id) {
                dispatch(changeCountThunk(basketItem, countItem))
                return obj
            }
        })
        if (!duplicate?.length) {
            let newBasket = [basketItem, ...basket]
            if (Auth) {
                const response = await UserAPI.setBasketUser(newBasket, userId)
                newBasket = response
            }
            dispatch(setBasketThunk(newBasket))
        }
    }
}
export const updateForPayment = (arrObj, ChangeForPayment) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        const selectedAllProducts = (getState().BasketPage.selectedAllProducts)
        const Auth = (getState().AuthPage.Auth)
        const userId = (getState().AuthPage.User.id)
        let newBasket
        //изменить forPayment у всех товаров
        if (ChangeForPayment === "AllChange") {
            let changeForPayment = basket.filter((obj) => {
                selectedAllProducts ?
                    obj.forPayment = true :
                    obj.forPayment = false
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
        if (Auth) {
            const response = await UserAPI.setBasketUser(newBasket, userId)
            newBasket = response
        }
        dispatch(setBasketThunk(newBasket))
    }
}
export const changeCountThunk = (basketItem, count) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        let updatedBasket = basket.filter((obj) => {
            if (obj.id === basketItem.id) {
                obj.countItem += count
            }
            return obj
        })
        dispatch(actions.setBasket(updatedBasket))
    }
}
export const deleteItemThunk = (basketItem) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        let updatedBasket = basket.filter((obj) => {
            return obj.id !== basketItem.id
        })
        dispatch(actions.setBasket(updatedBasket))
    }
}
export const setBasketThunk = (newBasket) => {
    return async (dispatch) => {
        dispatch(actions.setBasket(newBasket))
    }
}
export const selectedAllProductsThunk = (newBasket) => {
    return async (dispatch) => {
        dispatch(actions.setBasket(newBasket))
    }
}
export const cleanOutLocalBasket = () => {
    return async (dispatch) => {
        dispatch(actions.cleanOutLocalBasket())
    }
}

export default BasketReducer;