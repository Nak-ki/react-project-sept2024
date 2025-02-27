import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
