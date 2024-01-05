/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="absolute flex justify-between py-3 px-4 lg:px-8 sticky bottom-0 w-full font-main text-[18px]">
        <div className="flex w-full justify-start">
          <Link
            to="https://shiwanshi.hashnode.dev/"
            className="hover:underline transition-all"
          >
            writings.
          </Link>
        </div>
        <div className="flex w-full justify-end space-x-4  ">
          <Link to="/project" className="hover:underline transition-all">
            projects.
          </Link>
          <Link to="/about" className="hover:underline transition-all">
            about.
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
