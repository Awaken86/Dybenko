import { UserAPI } from "../api/api";

const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION'
const SET_USER = 'SET_USER'
const SET_TOKEN = 'SET_TOKEN'
const SET_AUTH = 'SET_AUTH'
const IS_LOADING = 'IS_LOADING'

let initialState = {
    showRegistration: false,
    Auth: false,
    User: {
        id: '',
        email: ''
    },
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
        default:
            return state;
    }
}
export const actions = {
    setShowRegistration: (showRegistration) => ({ type: SET_SHOW_REGISTRATION, showRegistration }),
    setUser: (user) => ({ type: SET_USER, user }),
    setToken: (token) => ({ type: SET_TOKEN, token }),
    setAuth: (Auth) => ({ type: SET_AUTH, Auth }),
    isLoading: (isLoading) => ({ type: IS_LOADING, isLoading })
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
        dispatch(authChangerThunk(response.token))
        //если rememberMe = true сохраняем токен
        const basket = (getState().BasketPage.basket) //получаем корзину
        // basket?.length > 0 && dispatch(addToBasket)
        UserData.rememberMe && dispatch(actions.setToken(response.token))
    } else {
        // dispatch(errorMessage(response.data.message))
        console.log('error loginThunk')
    }
}
//авторизация по токену
export const autoAuthThunk = () => async (dispatch, getState) => {
    try {
        const token = (getState().AuthPage.token)
        dispatch(actions.isLoading(true))
        debugger
        const data = await UserAPI.autoAuth(token)
        debugger
        dispatch(actions.setUser(data.user))
        dispatch(actions.setToken(data.token))
        dispatch(authChangerThunk(data.token))
        dispatch(actions.isLoading(false))
        console.log('Authorization acces')
    } catch (e) {
        dispatch(actions.isLoading(false))
        dispatch(actions.setToken(''))
        dispatch(authChangerThunk(''))
    }
}
export const authChangerThunk = (token) => async (dispatch) => {
    dispatch(actions.setAuth(!!token))
}



export default AuthReducer;