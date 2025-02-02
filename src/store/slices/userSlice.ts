import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUser, IUserList} from "../../interfaces/IUser.ts";
import {userService} from "../../services/userService.ts";

interface IState {
   users: IUser[]
   skip: number
   total: number
   limit: number
   user: IUser

}

const initialState: IState = {
    users: [],
    skip: null,
    total: null,
    limit: null,
    user: null
}


const getUsers = createAsyncThunk<IUserList, {skip: number}>(
    "userSlice/getUsers",
    async ({skip}, thunkAPI) => {
        try {
           const {data} = await userService.getUsers(skip)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const searchUser = createAsyncThunk<IUserList, {query: string}>(
    "userSlice/searchUser",
    async ({query}, thunkAPI) => {
        try {
           const {data} = await userService.searchUser(query)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const getById = createAsyncThunk<IUser, {id: number}>(
    "userSlice/getById",
    async ({id}, thunkAPI) => {
        try {
           const {data} = await userService.getById(id)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder

        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload.users
            state.skip = action.payload.skip
            state.limit = action.payload.limit
            state.total = action.payload.total
            state.user = null

        })
        .addCase(searchUser.fulfilled, (state, action) => {
            state.users = action.payload.users
            state.skip = action.payload.skip
            state.limit = action.payload.limit
            state.total = action.payload.total
            state.user = null

        })
        .addCase(getById.fulfilled, (state, action) => {
            state.user = action.payload


        })
})

const {reducer: userReducer, actions} = userSlice

const userActions = {
    ...actions,
    getUsers,
    searchUser,
    getById
}

export {
    userReducer,
    userActions
}