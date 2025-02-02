
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import css from './SearchUser.module.css'



const SearchUser = () => {


    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<{username: string}>()
    
    const search:SubmitHandler<{username: string}> = async ({username}) => {
        navigate(`?q=${username}`)
    }



    return (
        <div className={css.mainForm}>
            <form className={css.form} onSubmit={handleSubmit(search)}>
                <input className={css.search} type="text" placeholder={'username'} {...register('username')}/>
                <button className={css.button}>Search</button>
            </form>
        </div>
    );
};

export {SearchUser};
