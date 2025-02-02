import {UserInfo} from "../components/userConteiner/userInfo/UserInfo.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {userActions} from "../store/slices/userSlice.ts";
import {useAppSelector} from "../hooks/useAppSelector.ts";

const SingleUserPage = () => {
    const {id} = useParams<string>()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)
    console.log(user)

    useEffect(() => {
        dispatch(userActions.getById({id :+id}))
    }, [id]);
    return (
        <div>
            {user && <UserInfo/>}
        </div>
    );
};

export {SingleUserPage};
