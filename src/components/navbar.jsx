/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between py-4 px-4 lg:px-8 sticky top-0 w-full font-main">
      <div className="h-[50px] w-[50px]">
        <Link to="/#home">
          <span
            data-hover=";)"
            className="font-medium text-2xl trasition-all hover:text-[0px] hover:after:content-[attr(data-hover)] hover:after:text-2xl "
          >
            :)
          </span>
        </Link>
      </div>
      <div className=" text-[18px] font-medium">
        <span className="hover:underline transition-all">
          <Link to="/msg">msg.</Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
