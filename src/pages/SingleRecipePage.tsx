import {RecipeInfo} from "../components/recipeContainer/recipeInfo/RecipeInfo.tsx";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {useEffect} from "react";
import {recipeActions} from "../store/slices/recipeSlice.ts";

const SingleRecipePage = () => {
    const {id} = useParams<string>()
    const dispatch = useAppDispatch()
    const {recipe} = useAppSelector(state => state.recipe)

    useEffect(() => {
        dispatch(recipeActions.getById({id :+id}))
    }, [id]);
    return (
        <div>
            {
              recipe && <RecipeInfo/>
            }
        </div>
    );
};

export {SingleRecipePage};
