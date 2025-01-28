import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IUserWithTokens} from "../../interfaces/IUserWithTokens.tsx";
import {authService} from "../../services/authService.ts";

interface IState {
    loginError: string
    currentUser: IUserWithTokens
}

const initialState: IState = {
    loginError: null,
    currentUser: null
}


const login = createAsyncThunk<IUserWithTokens, { user : {username:string, password:string, expiresInMins:number}}>(
    "authSlice/login",
    async ({user}, thunkAPI) => {
        try {
            return  await authService.login(user)
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder

        .addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        .addCase(login.rejected, state => {
            state.loginError = "Wrong name or password"
        })
        .addMatcher(isFulfilled(login), state => {
            state.loginError = null
        })
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    login,
}

export {
    authReducer,
    authActions
}