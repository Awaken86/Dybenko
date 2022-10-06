import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import productReducer from "./Product-Reducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import BasketReducer from "./Basket-Reducer";




const reducers = combineReducers({
    ProductPage: productReducer,
    BasketPage: BasketReducer
})

const reducersPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['BasketPage']
}


const persistedReducer = persistReducer(reducersPersistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export const persistor = persistStore(store)

