import React from "react";
import Navbar from "../Navbar/Navbar.component";

const DefaultlayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultlayoutHoc;
