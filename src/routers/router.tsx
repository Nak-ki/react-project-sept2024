import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {SingleUserPage} from "../pages/SingleUserPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import {SingleRecipePage} from "../pages/SingleRecipePage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:'home', element:<HomePage/>},
            {path:'login', element:<LoginPage/>},
            {path:'users', element: <UsersPage/>},
            {path:'users/:id', element:<SingleUserPage/>},
            {path: 'recipes', element: <RecipesPage/>},
            {path:'recipes/:id', element: <SingleRecipePage/>}

        ]
    }
])