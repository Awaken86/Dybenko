import { UserAPI } from "../api/api";
import { setBasketThunk } from "./Basket-Reducer";

const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION'
const SET_USER = 'SET_USER'
const SET_TOKEN = 'SET_TOKEN'
const SET_AUTH = 'SET_AUTH'
const IS_LOADING = 'IS_LOADING'
const LOGOUT = 'LOGOUT'

let initialState = {
    showRegistration: false,
    Auth: false,
    User: {},
    token: '',
    isLoading: false
};




const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_REGISTRATION: {
            return {
                ...state,
                showRegistration: action.showRegistration
            }
        }
        case SET_USER: {
            return {
                ...state,
                User: action.user
            }
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                Auth: action.Auth
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case LOGOUT: {
            return {
                ...state,
                User: {},
                token: '',
                Auth: false
            }
        }
        default:
            return state;
    }
}
export const actions = {
    setShowRegistration: (showRegistration) => ({ type: SET_SHOW_REGISTRATION, showRegistration }),
    setUser: (user) => ({ type: SET_USER, user }),
    setToken: (token) => ({ type: SET_TOKEN, token }),
    setAuth: (Auth) => ({ type: SET_AUTH, Auth }),
    isLoading: (isLoading) => ({ type: IS_LOADING, isLoading }),
    logout: () => ({ type: LOGOUT })
}

// регистрация
export const RegistrationThank = (values) => async (dispatch) => {
    const response = await UserAPI.userRegistration(values.email, values.password)
    console.log(response)
    if (response.resultCode === 0) {
        console.log('to logging')
        const UserDate = {
            email: response.data.email,
            password: response.data.password,
            rememberMe: values.rememberMe
        }
        dispatch(loginThunk(UserDate))
    } else {
        // dispatch(errorMessage(response.data.message))
        console.log('error RegistrationThank')
    }

}
// логин
export const loginThunk = (UserData) => async (dispatch, getState) => {
    console.log('login')
    const response = await UserAPI.userLogin(UserData.email, UserData.password)
    if (response.resultCode === 0) {
        dispatch(actions.setUser(response.user))
        dispatch(syncLocalAndServerBasketThunk())
        dispatch(actions.setAuth(!!response.token))
        //если rememberMe = true сохраняем токен
        UserData.rememberMe && dispatch(setTokenAndAuthThunk(response.token))
    } else {
        // dispatch(errorMessage(response.data.message))
        console.log('error loginThunk')
    }
}
//авторизация по токену
export const autoAuthThunk = () => async (dispatch, getState) => {
    try {
        const token = (getState().AuthPage.token)
        if (!!token) {
            dispatch(actions.isLoading(true))
            const data = await UserAPI.autoAuth(token)
            dispatch(actions.setUser(data.user))
            dispatch(syncLocalAndServerBasketThunk())
            dispatch(setTokenAndAuthThunk(data.token))
            dispatch(actions.isLoading(false))
            console.log('Authorization acces')
        }
    } catch (e) {
        dispatch(actions.isLoading(false))
        dispatch(setTokenAndAuthThunk(''))
    }
}
export const syncLocalAndServerBasketThunk = () => async (dispatch, getState) => {
    const basket = (getState().BasketPage.basket)
    const userId = (getState().AuthPage.User.id)
    const response = await UserAPI.syncLocalAndServerBasketUser(basket, userId)
    if (response.resultCode === 0) {
        dispatch(setBasketThunk(response.basket))
    } else {
        // dispatch(errorMessage(response.data.message))
        console.log('error syncLocalAndServerBasketThunk')
    }
}
export const logoutThank = () => async (dispatch) => {
    dispatch(actions.logout())
}
export const setTokenAndAuthThunk = (token) => async (dispatch) => {
    dispatch(actions.setToken(token))
    dispatch(actions.setAuth(!!token))
}



export default AuthReducer;