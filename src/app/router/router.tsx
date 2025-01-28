import { useRoutes } from "react-router-dom"
import { HomePage } from "../../pages/HomePage"
import NotFoundPage from "../../pages/NotFound"


export const MyRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "*",
            element: <NotFoundPage/>
        },
    ])
}