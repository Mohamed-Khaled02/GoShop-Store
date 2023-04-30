import { Outlet, createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
// import { productsData } from "../api/ApiData";

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
        // loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/favorite",
        element:<Favorite />
      }
    //   {
    //     path: "/product/:id",
    //     element: <Product />,
    //   },
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   },
    ],
  },
]);
