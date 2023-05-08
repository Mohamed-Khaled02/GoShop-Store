import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Foods = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const data = useLoaderData();

  const jewelleryData = data.data.filter(
    (item) => item.category === "jewelery"
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handelSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.text.value);
  };

  useEffect(() => {
    setProducts(jewelleryData);
  }, [data]);

  return (
    <div className="py-10 flex flex-col items-center justify-items-center">
      <div className="flex border rounded-xl overflow-hidden">
        <div onSubmit={handelSubmit}>
          <label htmlFor="text" className="flex items-center">
            <input
              type="text"
              placeholder="Search for items..."
              className="px-4 py-2 w-[500px] focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p>
              <button type="submit">
                <FaSearch size={30} className="cursor-pointer" />
              </button>
            </p>
          </label>
        </div>
      </div>
      {/* Foods products */}
      <div className="mx-4 max-w-screen-2xl py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
