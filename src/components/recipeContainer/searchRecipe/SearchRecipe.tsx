
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import css from "./SearchRecipe.module.css";



const SearchRecipe = () => {


    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<{name: string}>()

    const search:SubmitHandler<{name: string}> = async ({name}) => {
        navigate(`?q=${name}`)
    }



    return (
        <div className={css.mainForm}>
            <form className={css.form} onSubmit={handleSubmit(search)}>
                <input className={css.search} type="text" placeholder={'Name'} {...register('name')}/>
                <button className={css.button}>Search</button>
            </form>
        </div>
    );
};

export {SearchRecipe};
