import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import restaurantSlice from "./slices/restaurantSlice"

const appStore = configureStore({
     reducer : {
        cart: cartReducer,
        restaurant : restaurantSlice.reducer
     },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(restaurantSlice.middleware)
})

export default appStore