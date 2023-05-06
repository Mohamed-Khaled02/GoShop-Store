import React, { useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { Link } from "react-router-dom";

function Singin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="ml-10 text-3xl font-extrabold leading-9 text-gray-900">
            Sign up to GoShop
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <AiTwotoneLock className="h-5 w-5 text-gray-500 group-hover:text-gray-400" />
              </span>
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-500 text-center">
          You Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-gray-600 hover:text-gray-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Singin;
