import {Recipes} from "../components/recipeContainer/recipes/Recipes.tsx";
import {SearchRecipe} from "../components/recipeContainer/searchRecipe/SearchRecipe.tsx";

const RecipesPage = () => {
    return (
        <div>
            <SearchRecipe/>
            <Recipes/>
        </div>
    );
};

export {RecipesPage};
