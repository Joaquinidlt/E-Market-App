import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
/* import persistState from 'redux-localstorage' */
import productReducer from "./reducer/product_reducer.js";
import cartReducer from "./reducer/cart_reducer.js";
import user from "./reducer/login_reducer.js";

const rootReducer = combineReducers({
    cartReducer,
    productReducer,
    user
  })

  export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )