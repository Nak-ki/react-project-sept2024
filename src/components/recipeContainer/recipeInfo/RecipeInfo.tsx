import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {RecipeTags} from "../recipeTags/RecipeTags.tsx";
import {useNavigate} from "react-router-dom";
import css from "./RecipeInfo.module.css";

const RecipeInfo = () => {
    const navigate = useNavigate();
    const {recipe} = useAppSelector(state => state.recipe)
    return (
        <div className={css.info}>
            <img className={css.img} src={recipe.image} alt={recipe.name}/>
            <p>Id: {recipe.id}</p>
            <p>Name: {recipe.name}</p>
            <p>Rating: {recipe.rating}</p>
            <p>Time: {recipe.prepTimeMinutes}</p>
            <div className={css.tags}>
                {
                recipe.tags.map((tag, index) => <RecipeTags key={index} tag={tag}/>)
                }
            </div>
            <p className={css.p} onClick={() => navigate(`/users/${recipe.userId}`)}> User page...</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>




        </div>
    );
};

export {RecipeInfo};
