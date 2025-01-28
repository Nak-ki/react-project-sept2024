import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {authActions} from "../../store/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";

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
            <form onSubmit={handleSubmit(toLogin)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export {LogIn};