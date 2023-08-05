import { Outlet } from "react-router-dom";
import fetchGifs from "../services/fetchGifs";
import { useEffect } from "react";

export function NavbarComponent(props) {
  useEffect(function () {
    fetchGifs("default").then((gifs) => {
      props.setGifs(gifs);
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>Giphy</h1>

        <div className="searchBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              fetchGifs(event.target.value).then((gifts) =>
                props.setGifs(gifts)
              );
            }}
          />
        </div>
      </nav>

      <Outlet />
    </>
  );
}
