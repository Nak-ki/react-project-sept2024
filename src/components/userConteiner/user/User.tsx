import {FC} from "react";
import {IUser} from "../../../interfaces/IUser.ts";
import {useNavigate} from "react-router-dom";
import css from './User.module.css'

type UserPropsType={
    user: IUser
}

const User:FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate()

    return (
        <div className={css.user} onClick={() => navigate(`${user.id}`)}>
            <p>Id: {user.id}</p>
            <p>Name: {user.firstName} {user.lastName}</p>
            <hr/>

        </div>
    );
};

export {User};
