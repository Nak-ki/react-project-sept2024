import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector.ts";

const Menu = () => {
    const {currentUser} = useAppSelector(state => state.auth)

    return (
        <div>
            {!currentUser ?
                <div>
                    <Link to={'/login'}>Login</Link>
                </div>
                :
                <div>
                    <div>{currentUser.username}</div>
                    <div>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/users'}>Users</Link>
                        <Link to={'/recipes'}>Recipes</Link>
                    </div>
                </div>


            }
        </div>
    );
};

export {Menu};
