import {IRes} from "../types/responeType.tsx";

import {apiService} from "./apiService.ts";
import {urls} from "../constants/constants.ts";
import {IRecipe, IRecipesList} from "../interfaces/IRecipe.ts";

export const recipeService = {
    getRecipes: (skip:number): IRes<IRecipesList> => apiService.get(urls.recipes.getRecipes(skip)),
    getById: (id: number): IRes<IRecipe> => apiService.get(urls.recipes.getById(id)),
    searchRecipes: (query: string): IRes<IRecipesList> => apiService.get(urls.recipes.searchRecipes(query)),
    searchByTag: (tag: string): IRes<IRecipesList> => apiService.get(urls.recipes.searchByTag(tag)),
}