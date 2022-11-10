import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../images/logo.jpg";
import { FaBars, FaCut } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("You've been successfully logged out❗");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

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
            {user?.uid && (
              <li>
                <Link to="/myReviews">My Reviews</Link>
              </li>
            )}
            {user?.uid && (
              <li>
                <Link to="/addService">Add Service</Link>
              </li>
            )}
            {user?.uid ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-link  text-md rounded-none font-semibold"
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          {user?.uid && (
            <li>
              <Link to="/myReviews">My Reviews</Link>
            </li>
          )}
          {user?.uid && (
            <li>
              <Link to="/addService">Add Service</Link>
            </li>
          )}
        </ul>
      </div>
      {user?.uid ? (
        <div className="navbar-end md:flex hidden">
          <div className="text-xl">
            <button
              onClick={handleLogOut}
              className="btn btn-link  text-md rounded-none font-semibold"
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
