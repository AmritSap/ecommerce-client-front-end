import { configureStore } from "@reduxjs/toolkit";
import createUserReducer from "./pages/createAccount/createAccountSlice"

const store = configureStore({reducer:{
    newuser : createUserReducer
}})

export default store;