import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";
import {useSearchParams} from "react-router-dom";
import {usePagination} from "../../../hooks/useUserPaginationHook.ts";
import {useEffect} from "react";
import {recipeActions} from "../../../store/slices/recipeSlice.ts";
import {Recipe} from "../recipe/Recipe.tsx";
import {RecipesPagination} from "../recipesPagination/RecipesPagination.tsx";

const Recipes = () => {

    const {recipes} = useAppSelector(state => state.recipe)
    const dispatch = useAppDispatch()
    const [query] = useSearchParams()
    const q = query.get('q')
    const {skip} = usePagination()
    const tag = query.get('tag')

    useEffect(() => {
        if(q) {
            dispatch(recipeActions.searchRecipes({query:q}))
        }
        else if (tag){
            dispatch(recipeActions.searchByTag({tag}))

        }
        else {
            dispatch(recipeActions.getRecipes({skip: +skip}))
        }



    }, [dispatch, skip, q, tag]);
    return (
        <div>
            {
                recipes && recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
            <RecipesPagination/>
        </div>
    );
};

export {Recipes};