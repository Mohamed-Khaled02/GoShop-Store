import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToCart, toggleFavorite } from "../redux/featuers/storeSlice";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  const { id, title, image, price, category } = item;

  const navigate = useNavigate();

  const handelProductDetails = () => {
    navigate(`/product/${id}`, {
      state: {
        item: item,
      },
    });
  };

  const handleIsFav = () => {
    setIsFav((p) => !p);
    dispatch(toggleFavorite({ id, title, price, image, category }));
  };

  return (
    <div className="groub rounded-lg  shadow-xl px-2 border-[1px] border-gray-300">
      {/* Image */}
      <div onClick={handelProductDetails} className="overflow-hidden">
        <img
          className="w-full h-96 object-cover hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      {/* Body */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg mb-2 flex justify-between items-center ">
          {title?.slice(0, 20)}
          <button className="cursor-pointer" onClick={handleIsFav}>
            {isFav ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
          </button>
        </h3>
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-gray-700 font-medium">
            {category?.toUpperCase()}
          </span>
          <div className="text-gray-700 ">
            <span className="font-bold">${price}</span>
          </div>
        </div>
      </div>
      {/* Add to Cart button */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: id,
              title: title,
              image: image,
              price: price,
              category: category,
              quantity: 1,
            })
          ) & toast.success(`${title} Added To Card`)
        }
        className="mb-5 w-full rounded-sm bg-black text-white py-2 transition duration-300 hover:bg-white hover:border-[1px] hover:border-black hover:text-black focus:outline-none"
      >
        Add to Cart
      </button>
      {/* toastify */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductCard;
