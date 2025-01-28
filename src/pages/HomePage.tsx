import {useAppSelector} from "../hooks/useAppSelector.ts";

const HomePage = () => {
    const {currentUser} = useAppSelector(state => state.auth)
    console.log(currentUser)
    return (
        <div>
            <p>You are not authorized, please log in.</p>
        </div>
    );
};

export {HomePage};

