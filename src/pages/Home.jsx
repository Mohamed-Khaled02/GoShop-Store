import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Card";
import Products from "../components/Products";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // const data = useLoaderData();

  // useEffect(() => {
  //   setProducts(data.data);
  // }, [data]);
  return (
    <div>
      <Banner />
      {/* <Products products={products}/> */}
      <Cards />
    </div>
  );
};

export default Home;
