import {Users} from "../components/userConteiner/users/Users.tsx";
import {SearchUser} from "../components/userConteiner/searchUser/SearchUser.tsx";

const UsersPage = () => {
    return (
        <div>
            <SearchUser/>
           <Users/>
        </div>
    );
};

export {UsersPage};
