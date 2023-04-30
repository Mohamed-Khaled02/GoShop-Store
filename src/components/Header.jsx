import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="flex items-center justify-between flex-wrap p-5">
        <div className="flex items-center mr-6">
          <Link to="/" className="text-xl font-bold">
            GoShop
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/cart" className="flex items-center mr-4">
            Cart <FaShoppingCart className="ml-1" />
          </Link>
          <Link to="/favorite" className="flex items-center mr-4">
            Favorites <FaHeart className="ml-1" />
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 border rounded-full hover:bg-white hover:text-black duration-300"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
