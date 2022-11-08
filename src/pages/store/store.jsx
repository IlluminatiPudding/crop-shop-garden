
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";
import cartSlice from "./cart-clice";
import uiSlice from "./ui-slice";


const store = configureStore(
    {
        reducer: counterSlice.reducer,
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
        
    }
);
export default store;