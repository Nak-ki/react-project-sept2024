import {useAppSelector} from "../../hooks/useAppSelector.ts";
import css from "./Home.module.css";

const Home = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    return (
        <div className={css.Home}>
            {!currentUser && <p>You are not authorized, please log in.</p>}
        </div>
    );
};

export {Home};
