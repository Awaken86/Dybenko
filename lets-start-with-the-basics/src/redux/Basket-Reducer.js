import { UserAPI } from "../api/api"

const SET_BASKET = 'SET_BASKET'
const CLEAN_OUT_LOCAL_BASKET = 'CLEAN_OUT_LOCAL_BASKET'

let initialState = {
    basket: []
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
        let newSelectedItem = {
            id: selectedItem._id,
            price: selectedItem.price,
            title: selectedItem.title,
            picture: selectedItem.picture,
            countItem: countItem,
            forPayment: false
        }
        let NewCount
        let findDuplicate = basket?.filter((obj) => {
            if (obj.id === newSelectedItem.id) {
                NewCount = obj.countItem + countItem
                return obj
            } else {
                return null
            }
        })
        if (findDuplicate?.length > 0) {
            dispatch(updateBasket(basket, newSelectedItem, NewCount))
        } else {
            let newBasket
            if (basket?.length > 0) {
                newBasket = [newSelectedItem, ...basket]
            }
            else {
                newBasket = [newSelectedItem]
            }
            if (Auth) {
                const response = await UserAPI.setBasketUser(newBasket, userId)
                newBasket = response
            }
            dispatch(setBasketThunk(newBasket))
        }
    }
}
export const updateBasket = (arrObj, NewCount, ChangeForPayment) => {
    return async (dispatch, getState) => {
        const basket = (getState().BasketPage.basket)
        const Auth = (getState().AuthPage.Auth)
        const userId = (getState().AuthPage.User.id)
        let newBasket
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
        if (Auth) {
            const response = await UserAPI.setBasketUser(newBasket, userId)
            newBasket = response
        }
        dispatch(setBasketThunk(newBasket))
    }
}
export const changeForPayment = (forPayment) => {
    return async (dispatch) => {

    }
}
export const setBasketThunk = (newBasket) => {
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