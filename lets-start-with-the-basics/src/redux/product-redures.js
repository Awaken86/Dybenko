import { productAPI } from '../api/api'

const SET_USERS = 'SET_USERS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    portionSize: 15

};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}
export const setUsers = (users) => ({ type: SET_USERS, users })

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        let data = await productAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
    };
}

export default productReducer;