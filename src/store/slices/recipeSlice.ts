import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IRecipe, IRecipesList} from "../../interfaces/IRecipe.ts";
import {recipeService} from "../../services/recipeService.ts";

interface IState {
    recipes: IRecipe[]
    skip: number
    total: number
    limit: number
    recipe: IRecipe


}

const initialState: IState = {
    recipes: [],
    skip: null,
    total: null,
    limit: null,
    recipe: null
}


const getRecipes = createAsyncThunk<IRecipesList, {skip: number}>(
    "recipeSlice/getRecipes",
    async ({skip}, thunkAPI) => {
        try {
            const {data} = await recipeService.getRecipes(skip)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const searchRecipes = createAsyncThunk<IRecipesList, {query: string}>(
    "recipeSlice/searchRecipes",
    async ({query}, thunkAPI) => {
        try {
            const {data} = await recipeService.searchRecipes(query)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const getById = createAsyncThunk<IRecipe, {id: number}>(
    "recipeSlice/getById",
    async ({id}, thunkAPI) => {
        try {
            const {data} = await recipeService.getById(id)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const searchByTag = createAsyncThunk<IRecipesList, {tag: string}>(
    "recipeSlice/searchByTag",
    async ({tag}, thunkAPI) => {
        try {
            const {data} = await recipeService.searchByTag(tag)
            return data
        }
        catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder

        .addCase(getRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
            state.skip = action.payload.skip
            state.limit = action.payload.limit
            state.total = action.payload.total
            state.recipe = null

        })
        .addCase(searchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
            state.skip = action.payload.skip
            state.limit = action.payload.limit
            state.total = action.payload.total
            state.recipe = null

        })
        .addCase(getById.fulfilled, (state, action) => {
            state.recipe = action.payload

        })
        .addCase(searchByTag.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
            state.skip = action.payload.skip
            state.limit = action.payload.limit
            state.total = action.payload.total
            state.recipe = null

        })
})

const {reducer: recipeReducer, actions} = recipeSlice

const recipeActions = {
    ...actions,
    getRecipes,
    searchRecipes,
    getById,
    searchByTag,
}

export {
    recipeReducer,
   recipeActions
}