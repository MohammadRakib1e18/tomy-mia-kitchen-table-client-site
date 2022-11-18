import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../images/logo.jpg";
import { FaBars, FaCut } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import "./Navbar.css";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme")||'light');

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("You've been successfully logged out❗");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  useEffect(() => {
    let html = window.document.documentElement;
    html.setAttribute("class", theme);
    if(theme==='dark'){
      html.classList.add('light-bg');
    }
    else{
      html.classList.add('dark-bg');
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  };

  return (
    <div className="navbar  z-10  sticky top-0  bg-slate-800">
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

          <Link className="flex items-center justify-center md:justify-start text-xl w-5/6 lg:w-full  mx-auto">
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
            <li
              className="text-white dark:text-yellow-300 list-none ml-5"
              onClick={changeTheme}
            >
              <span>
                <FaSun />
              </span>
            </li>
          </Link>
        </div>
        <div className={open ? " md:hidden" : " hidden"}>
          <ul className="menu  menu-normal p-0 ">
            <li >
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {user?.uid && (
              <li>
                <NavLink to="/myReviews">My Reviews</NavLink>
              </li>
            )}
            {user?.uid && (
              <li>
                <NavLink to="/addService">Add Service</NavLink>
              </li>
            )}
            {user?.uid ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-warning  text-md rounded-none font-semibold"
                >
                  Sign out
                </button>
                <span title={user.displayName}>
                  <img
                    src={user.photoURL}
                    className="w-12 rounded-full gap-2"
                    alt=""
                  />
                </span>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline  text-lg rounded-none font-semibold">
                  Sign in
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          {user?.uid && (
            <li>
              <NavLink to="/myReviews">My Reviews</NavLink>
            </li>
          )}
          {user?.uid && (
            <li>
              <NavLink to="/addService">Add Service</NavLink>
            </li>
          )}
        </ul>
      </div>
      {user?.uid ? (
        <div className="navbar-end md:flex hidden">
          <div className="text-xl">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-warning  text-md rounded-none font-semibold"
            >
              Sign out
            </button>
          </div>
          <span
            className="tooltip tooltip-left"
            data-tip={`${user.displayName}`}
          >
            <img
              src={user.photoURL}
              className="w-12 rounded-full gap-2"
              alt=""
            />
          </span>
        </div>
      ) : (
        <div className="navbar-end text-xl md:flex hidden">
          <Link to="/login">
            <button className="btn btn-outline btn-warning text-lg rounded-none font-semibold">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
