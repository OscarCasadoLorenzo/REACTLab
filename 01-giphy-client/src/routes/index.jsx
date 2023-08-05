import { useRoutes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NavbarComponent } from "../components/NavbarComponent";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useState } from "react";

export default function Router() {
  const [gifs, setGifs] = useState([]);

  const element = useRoutes([
    {
      path: "/",
      element: <NavbarComponent setGifs={setGifs} />,
      children: [
        {
          index: true,
          element: <HomePage gifs={gifs} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return element;
}
