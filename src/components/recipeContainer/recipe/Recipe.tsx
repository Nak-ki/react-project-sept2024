import {FC} from "react";
import {IRecipe} from "../../../interfaces/IRecipe.ts";
import {useNavigate} from "react-router-dom";
import {RecipeTags} from "../recipeTags/RecipeTags.tsx";
import css from './Recipe.module.css'

type RecipePropsType = {
    recipe: IRecipe
}

const Recipe:FC<RecipePropsType> = ({recipe}) => {
    const navigate = useNavigate()

    return (
        <div className={css.recipe} >
            <p className={css.p} onClick={() => navigate(`${recipe.id}`)}>Name: {recipe.name}</p>
            <div className={css.tags} >
                {
                    recipe.tags.map((tag, index) => <RecipeTags key={index} tag={tag}/>)

                }
            </div>
            <hr/>
        </div>
    );
};

export {Recipe};
