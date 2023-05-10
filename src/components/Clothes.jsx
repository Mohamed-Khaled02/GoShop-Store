import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const data = useLoaderData();

  const mensData = data.data.filter(
    (item) => item.category === "men's clothing"
  );

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (priceFilter === "over50") return product.price > 50;
      if (priceFilter === "under50") return product.price < 50;
      if (priceFilter === "over100") return product.price > 100;
      if (priceFilter === "all") return product;
      return true;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.text.value);
  };

  useEffect(() => {
    setProducts(mensData);
  }, [data]);

  return (
    <div className="py-10 flex flex-col items-center justify-items-center">
      <div className="flex flex-col items-center max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Filter section */}
        <div className="w-full mb-8 sm:w-1/4 sm:mb-0">
          <p className="font-bold mb-4">Price:</p>
          <button
            className={`mb-2 w-full ${
              priceFilter === "over50" ? "bg-gray-200" : ""
            }`}
            onClick={() => setPriceFilter("over50")}
          >
            Over $50
          </button>
          <button
            className={`mb-2 w-full ${
              priceFilter === "under50" ? "bg-gray-200" : ""
            }`}
            onClick={() => setPriceFilter("under50")}
          >
            Under $50
          </button>
          <button
            className={`mb-2 w-full ${
              priceFilter === "over100" ? "bg-gray-200" : ""
            }`}
            onClick={() => setPriceFilter("over100")}
          >
            Over $100
          </button>
          <button className="mb-2 w-full" onClick={() => setPriceFilter("all")}>
            All Products
          </button>
        </div>
        {/* Search input and products */}
        <div className="flex-1">
          {/* Search input */}
          <div className="flex border rounded-xl overflow-hidden mb-8">
            <form onSubmit={handleSubmit} className="w-full">
              <label htmlFor="text" className="flex items-center">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="px-4 py-2 w-full focus:outline-none"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="mx-4" />
              </label>
            </form>
          </div>
          {/* Clothes products */}
          <div className="mx-auto max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
