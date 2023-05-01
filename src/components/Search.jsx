import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <label htmlFor="text" className="flex items-center">
      <input
        type="text"
        placeholder="Search for items..."
        className="px-4 py-2 w-full focus:outline-none"
        id="text"
      />
      <p><FaSearch size={20} className="cursor-pointer"/></p>
      </label>
    </>
  );
};

export default Search;
