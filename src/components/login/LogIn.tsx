import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {authActions} from "../../store/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";
import css from './Login.module.css'

const LogIn = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<{username:string, password:string}>()

    const toLogin:SubmitHandler<{username:string, password:string}> = async (user) => {
        await dispatch(authActions.login({user:{...user, expiresInMins:30}}))
        navigate('/home')
    }
    return (
        <div>
            <form className={css.login} onSubmit={handleSubmit(toLogin)}>
                <input className={css.input1} type="text" placeholder={'Username'} {...register('username')}/>
                <input className={css.input2} type="text" placeholder={'Password'} {...register('password')}/>
                <button className={css.btn}>Login</button>
            </form>
        </div>
    );
};

export {LogIn};