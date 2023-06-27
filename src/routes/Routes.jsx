import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllProjects from "../pages/AllProjects/AllProjects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/projects', element: <AllProjects /> },
        ]
    }
])