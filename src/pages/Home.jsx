import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Import the Swiper component
// import SwiperComponentForLatestProducts from "../components/ui/swiper1";

import SwiperComponent from "../components/ui/swiper";
import ProductCard from "../components/ui/ProductCard";
import CartBtn from "../components/ui/CartBtn";

const Home = () => {
  // const latestProducts = [
  //   {
  //     name: "Sony Alpha DSLR Camera",
  //     initialPrice: 1000,
  //     discountedPrice: 500,
  //     finalPrice: 500,
  //     image: "../image-1.jpg",
  //   },

  //   {
  //     name: "Optoma 4K HDR Projector",
  //     initialPrice: 2000,
  //     discountedPrice: 0,
  //     image: "../image-2.jpg",
  //   },

  //   {
  //     name: "Sony Alpha DSLR Camera",
  //     initialPrice: 1000,
  //     discountedPrice: 500,
  //     finalPrice: 500,
  //     image: "../image-3.jpg",
  //   },
  // ];

  const [open, setOpened] = useState(false);

  const [openBrandItem, setopenBrandItem] = useState(false);

  const handleClicked = () => {
    setOpened(!open);
  };

  const handleClickedForBrandItem = () => {
    setopenBrandItem(!openBrandItem);
  };
  return (
    <div>
      {/* Use the Swiper component */}
      <SwiperComponent />

      <h1 className="font-bold text-lg p-1">Latest Products</h1>

      {/* <SwiperComponentForLatestProducts/> */}

      <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {/* <!-- Sony Camera Card --> */}

        {/* {latestProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))} */}

        <div className="bg-white shadow-md rounded-md   text-center flex flex-col p-4">
          <a href="/product">
            <img
              src="../image-2.jpg"
              alt="Sony Alpha DSLR Camera"
              className="w-full"
            />
          </a>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Sony Alpha DSLR Camera
          </h2>
          <p className="line-through text-gray-400 font-semibold text-lg">
            $500
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-2 ">$500</p>

          <button className="w-full text-black  hover:text-white flex px-4 py-2 border rounded-md hover:bg-black transition bg-red-600 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l2-8h6l2 8"
              />
            </svg>
            <span className="">Add to cart</span>
          </button>
        </div>


        <div className="bg-white shadow-md rounded-md   text-center flex flex-col p-4">
          <a href="/product">
            <img
              src="../image-2.jpg"
              alt="Sony Alpha DSLR Camera"
              className="w-full"
            />
          </a>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Sony Alpha DSLR Camera
          </h2>
          {/* <p className="line-through text-gray-400 font-semibold text-lg">
            $500
          </p> */}
          <p className="text-2xl font-bold text-gray-900  mt-2">$500</p>

          <button className=" text-black  hover:text-white flex px-4 py-2 border rounded-md hover:bg-black transition bg-red-600 justify-center mt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l2-8h6l2 8"
              />
            </svg>
            <span className="">Add to cart</span>
          </button>

          {/* <CartBtn/> */}
        </div>

        {/* Optoma 4K HDR Projector */}

        {/* <div className="bg-white shadow-md rounded-md text-center p-4">
          <img
            src="../image-2.jpg"
            alt="Sony Alpha DSLR Camera"
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Sony Alpha DSLR Camera
          </h2>
          <p className="line-through text-gray-400 font-semibold text-lg bg-pink-700">
            $500
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-4">$500</p>

          <div classNameName="mt-5 flex justify-center bg-amber-300">
            <button className=" text-black hover:text-white flex px-4 py-2 border rounded-md hover:bg-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l2-8h6l2 8"
                />
              </svg>
              <span>Add to cart</span>
            </button>
          </div>
        </div> */}

        {/* Optoma 4K HDR Projector */}
        {/* <div className="bg-white shadow-md rounded-md p-6  text-center">
          <img
            src="../image-1.jpg"
            alt="Optoma 4K HDR Projector"
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Optoma 4K HDR Projector
          </h2>
          <p className="text-2xl font-bold text-gray-900 mb-4">$1,500</p>
          <button className="mt-auto flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l2-8h6l2 8"
              />
            </svg>
            Add to cart
          </button>
        </div> */}

        {/* Optoma 4K HDR Projector */}

        {/* <div className="bg-white shadow-md rounded-md p-6  text-center">
          <img
            src="../image-1.jpg"
            alt="Optoma 4K HDR Projector"
            className="w-full"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Optoma 4K HDR Projector
          </h2>
          <p className="text-2xl font-bold text-gray-900 mb-4">$1,500</p>
          <button className="mt-auto flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l2-8h6l2 8"
              />
            </svg>
            Add to cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
