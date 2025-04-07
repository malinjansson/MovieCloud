import { createBrowserRouter } from "react-router";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movie/:id",
                element: <Movie />
            }
        ]
    }
])