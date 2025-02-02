import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice.ts";
import {userReducer} from "./slices/userSlice.ts";
import {recipeReducer} from "./slices/recipeSlice.ts";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        recipe: recipeReducer
    }
})
 export {
    store
 }