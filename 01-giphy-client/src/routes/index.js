import { useRoutes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import NavbarComponent from '../components/NavbarComponent'

export default function Router() {
    let element = useRoutes([
        {
            path: "/", 
            element: <NavbarComponent />,
            children: [
                { 
                    index: true,
                    element: <HomePage /> 
                },
            ]
        },
        {
            path: '*',
            element: <NotFoundPage />
        }
    ]);
    return element;
}