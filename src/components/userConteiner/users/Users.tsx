
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {UsersPagination} from "../usersPagination/UsersPagination.tsx";
import {User} from "../user/User.tsx";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userActions} from "../../../store/slices/userSlice.ts";
import {usePagination} from "../../../hooks/useUserPaginationHook.ts";
import {useSearchParams} from "react-router-dom";

const Users = () => {

    const {users} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [query] = useSearchParams()
    const q = query.get('q')
    const {skip} = usePagination()

    useEffect(() => {
        if(q) {
            dispatch(userActions.searchUser({query:q}))

        } else {
            dispatch(userActions.getUsers({skip: +skip}))
        }


    }, [skip, q]);
    return (
        <div>
            {
                users && users.map(user => <User key={user.id} user={user}/>)
            }
            <UsersPagination/>
        </div>
    );
};

export {Users};