import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const dataImagesSlider = [
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  ];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
    }, 7000);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentSlide]);

  return (
    <div className="flex w-full gap-2 py-2">
      <div className="hidden md:block w-1/5 px-4 py-8 bg-[#0C7489] text-white">
        <h1 className="text-2xl font-bold mb-6">Categories</h1>
        <div className="flex flex-col gap-4">
          <span className="text-lg border-b-[1px] border-gray-50 cursor-pointer">
            Electronics
          </span>
          <span className="text-lg border-b-[1px] border-gray-50 cursor-pointer">
            Clothes
          </span>
          <span className="text-lg border-b-[1px] border-gray-50 cursor-pointer">
            Food
          </span>
        </div>
      </div>
      <div className="w-full h-full md:w-4/5">
        <div className="relative">
          <div className=" flex overflow-x-hidden">
            <img
              loading="priorety"
              src={dataImagesSlider[currentSlide]}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
