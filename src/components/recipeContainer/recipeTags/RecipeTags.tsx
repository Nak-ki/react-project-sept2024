import {FC} from "react";
import {useNavigate} from "react-router-dom";
import css from './RecipeTags.module.css'

type RecipeTagsPropsType = {
    tag: string;
}

const RecipeTags:FC<RecipeTagsPropsType> = ({tag}) => {
    const navigate = useNavigate()

    return (
        <p className={css.tag} onClick={() => navigate(`/recipes?tag=${tag}`)}>
            {tag}
        </p>
    );
};

export {RecipeTags};
