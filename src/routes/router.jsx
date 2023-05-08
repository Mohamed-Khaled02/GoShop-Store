import {
  Outlet,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Singin from "../pages/Singin";
import Singup from "../pages/Singup";
import { productsData } from "../api/apiData";
import Product from "../components/Product";
import Clothes from "../components/Clothes";
import Foods from "../components/Foods";
import Electroincs from "../components/Electronics";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/signup",
        element: <Singup />,
      },
      {
        path: "/signin",
        element: <Singin />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/clothes",
        element: <Clothes />,
        loader: productsData,
      },
      {
        path: "/food",
        element: <Foods />,
        loader: productsData,
      },
      {
        path: "/electronics",
        element: <Electroincs />,
        loader: productsData,
      },
    ],
  },
]);
