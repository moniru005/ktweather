import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Navbar from "../Components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import AddUser from "../Pages/Dashboard/AllUsers/AddUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/dashboard',
        element: 
        <>
           <PrivateRoute>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
           </PrivateRoute>
        </>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addUser',
                element: <AddUser></AddUser>
            },
            
        ]
    }
])