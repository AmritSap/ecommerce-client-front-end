import { configureStore } from "@reduxjs/toolkit";
import createUserReducer from "./pages/createAccount/createAccountSlice";
import loginReducer from "./pages/login/loginSlice";
import productReducer from "./pages/product/productSlice";
import categoryReducer from "./pages/category/category.Slice";
import cartReducer from "./pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    newuser: createUserReducer,
    login: loginReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,  
  },
});

export default store;
