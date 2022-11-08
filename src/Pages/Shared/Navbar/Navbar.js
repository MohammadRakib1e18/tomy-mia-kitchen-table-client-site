import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../images/logo.jpg";
import { FaBars, FaCut } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar  bg-slate-800">
      <div className="navbar-start w-5/6 flex-col mx-auto">
        <div className="flex items-center">
          <div
            className="mr-5 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <FaCut /> : <FaBars />}
          </div>
          <Link
            className="flex items-center justify-center md:justify-start text-xl w-5/6 lg:w-full  mx-auto"
            to="/"
          >
            <img
              className="w-1/12 md:w-1/12 mr-2 rounded-full"
              src={navLogo}
              alt=""
            />
            <h2>
              <span className="text-orange-400">T</span>ommy's
              <span className="text-orange-400"> K</span>itchen
              <span className="text-orange-400"> T</span>able
            </h2>
          </Link>
        </div>
        <div className={open ? " md:hidden" : " hidden"}>
          <ul className="menu menu-normal p-0 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div className={open ? " md:hidden" : " hidden"}>
          <Link to="/login">
            <button className="btn btn-outline  text-lg rounded-none font-semibold">
              Sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end text-xl md:flex hidden">
        <Link to="/login">
          <button className="btn btn-outline  text-lg rounded-none font-semibold">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
