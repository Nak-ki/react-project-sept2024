import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {authService} from "../../services/authService.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {authActions} from "../../store/slices/authSlice.ts";
import css from './Menu.module.css'



const Menu = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    const dispatch  = useAppDispatch()
    const accessToken = authService.getAccessToken()

    useEffect(() => {
        if (accessToken && !currentUser) {
            dispatch(authActions.me())
        }
    }, [dispatch, accessToken, currentUser])

    return (
        <div className={css.mainMenu}>
            {!currentUser ?
                <div className={css.log}>
                    <Link to={'/login'}>Login</Link>
                </div>
                :
                <div className={css.menu}>
                    <img src={currentUser.image} alt={currentUser.username}></img>
                    <div className={css.links}>
                        <Link className={css.link1} to={'/home'}>Home</Link>
                        <Link className={css.link2} to={'/users'}>Users</Link>
                        <Link className={css.link3} to={'/recipes'}>Recipes</Link>
                    </div>
                </div>


            }
        </div>
    );
};

export {Menu};
