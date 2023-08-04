import { useRoutes } from "react-router-dom";
import {HomePage} from '../pages/HomePage'
import {NavbarComponent} from '../components/NavbarComponent'
import {NotFoundPage} from '../pages/NotFoundPage'

export default function Router() {
    const element = useRoutes([
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