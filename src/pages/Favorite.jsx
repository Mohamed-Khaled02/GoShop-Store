import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorite = () => {
  const favoriteItems = useSelector((state) => state.goShop.favoritesItems);
  console.log(favoriteItems);
  return (
    <>
      {favoriteItems.map((item) => {
        return (
          <div className="mx-4 max-w-screen-2xl py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard item={item} />
          </div>
        );
      })}
    </>
  );
};

export default Favorite;
