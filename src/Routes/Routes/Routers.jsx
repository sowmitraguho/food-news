import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            
        ],
    }
])