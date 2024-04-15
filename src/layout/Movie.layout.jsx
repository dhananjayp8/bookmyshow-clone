import React from "react";
import MovieNavbar from "../Navbar/Movie.Navbar.component";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovielayoutHoc;
