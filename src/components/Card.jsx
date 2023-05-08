import React from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl bg-black text-white text-center py-2 w-80">
          Shop Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="text-gray-600 max-w-[700px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          natus laudantium, ea ut omnis quos, sint voluptatum aliquid aperiam
          labore numquam voluptatem reprehenderit fugiat consectetur iure
          laborum quasi earum itaque!
        </p>
      </div>
      {/* Card 1 - Clothes */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-center items-center rounded-lg shadow-lg overflow-hidden ">
        <img
          className="w-full h-64  rounded-md mb-4 cursor-pointer object-cover hover:scale-105 transition duration-300"
          src="https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <button
          onClick={() => navigate("/clothes")}
          className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 hover:bg-white hover:border-[1px] hover:border-black hover:text-black"
        >
          Men'Clothes
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center items-center rounded-lg shadow-lg overflow-hidden ">
        <img
          className="w-full h-64  rounded-md mb-4 cursor-pointer object-cover hover:scale-105 transition duration-300"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <button
          onClick={() => navigate("/food")}
          className="bg-black transition duration-150 hover:bg-white hover:border-[1px] hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Foods
        </button>
      </div>

      {/* card 3 */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center items-center rounded-lg shadow-lg overflow-hidden ">
        <img
          className="w-full h-64  rounded-md mb-4 cursor-pointer object-cover hover:scale-105 transition duration-300"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <button
          onClick={() => navigate("/electronics")}
          className="bg-black transition duration-150 hover:bg-white hover:border-[1px] hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Electroncis
        </button>
      </div>
    </div>
  );
}

export default Cards;
