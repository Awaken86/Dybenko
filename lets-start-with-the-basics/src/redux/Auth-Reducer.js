
const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION'

let initialState = {
    showRegistration: false
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
    setShowRegistration: (showRegistration) => ({ type: SET_SHOW_REGISTRATION, showRegistration })
}



export default AuthReducer;