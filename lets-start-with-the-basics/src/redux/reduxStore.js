import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import productReducer from "./Product-Reducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import BasketReducer from "./Basket-Reducer";
import AuthReducer from "./Auth-Reducer";
import appReducer from "./app-Reducer";

const reducersPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['BasketPage']
}
const AuthReducerPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['token']
}


const reducers = combineReducers({
    AppPage: appReducer,
    ProductPage: productReducer,
    BasketPage: BasketReducer,
    AuthPage: persistReducer(AuthReducerPersistConfig, AuthReducer)

})



const persistedReducer = persistReducer(reducersPersistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export const persistor = persistStore(store)

