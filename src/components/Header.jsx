import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const items = useSelector((state) => state.goShop.productQuantity);

  return (
    <header className="bg-white text-black shadow-md border-b-[1px] border-gray-300 sticky top-0 z-50 ">
      <nav className="flex items-center gap-8 flex-wrap p-4 w-full">
        <div className="flex items-center mr-6">
          <Link to="/" className="text-2xl font-bold">
            GoShop
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/cart" className="flex items-center mr-4">
            Cart{" "}
            <span className="bg-red-500 text-white rounded-full px-2 ml-1">
              {items.length}
            </span>
          </Link>
          <Link to="/favorite" className="flex items-center mr-4">
            Favorites{" "}
            <span className="bg-red-500 text-white rounded-full px-2 ml-1">
              10
            </span>
          </Link>
          <Link
            to="/signin"
            className="px-4 py-2 border rounded-full hover:bg-black hover:text-white duration-300"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
