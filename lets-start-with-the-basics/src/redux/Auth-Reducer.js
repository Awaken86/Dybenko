import { UserAPI } from "../api/api";

const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION'

let initialState = {
    showRegistration: false,
    Auth: false,
    token: ''
};




const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_REGISTRATION: {
            return {
                ...state,
                showRegistration: action.showRegistration
            }
        }
        default:
            return state;
    }
}
export const actions = {
    setShowRegistration: (showRegistration) => ({ type: SET_SHOW_REGISTRATION, showRegistration }),
    setUser: (user) => ({ type: SET_SHOW_REGISTRATION, user }),
    setToken: (token) => ({ type: SET_SHOW_REGISTRATION, token })
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
export const loginThunk = (UserData) => async (dispatch) => {
    console.log('login')
    const response = await UserAPI.userLogin(UserData.email, UserData.password)
    if (response.resultCode === 0) {
        dispatch(actions.setUser(response.user))
        //если rememberMe = true сохраняем токен
        dispatch(actions.setToken(response.token))
    } else {
        // dispatch(errorMessage(response.data.message))
        console.log('error loginThunk')
    }
}
// //авторизация по токену
// export const autoAuthThunk = () => async (dispatch) => {
//     try {
//         dispatch(toggleinProcces(true))
//         const response = await authAPI.autoAuth()
//         dispatch(setUser(response.data.user))
//         localStorage.setItem('token', response.data.token)
//         dispatch(toggleinProcces(false))
//         console.log('Authorization acces')
//     } catch (e) {
//         dispatch(toggleinProcces(false))
//         localStorage.removeItem('token')
//     }
// }




export default AuthReducer;