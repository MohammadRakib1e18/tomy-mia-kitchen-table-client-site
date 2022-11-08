import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="mt-5 w-5/6 mx-auto max-w-md p-8 space-y-3 rounded-xl   bg-slate-700   text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        novalidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label for="username" className="block   text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block   text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400"
          />
        </div>
        <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16   bg-gray-700"></div>
        <p className="px-3 text-sm   text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16   bg-gray-700"></div>
      </div>
      <div className="flex justify-between space-x-10">
        <h2 className="bg-red-500 text-2xl w-full rounded-full flex justify-center py-1">
          <FaGoogle />
        </h2>
        <h2 className="bg-black text-2xl w-full rounded-full flex justify-center py-1">
          <FaGithub />
        </h2>
      </div>
      <p className="text-xs text-center sm:px-6   text-gray-400">
        Don't have an account?
        <Link to="/Registration" className="ml-2 underline   text-gray-100">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
