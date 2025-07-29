import React from "react";



import Image1 from "../assets/image-1.jpg";

import Image2 from "../assets/image-2.jpg";

const BrandProducts = () => {
  return (
    <>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 p-4">
        <div className="bg-white shadow-md rounded-md   text-center flex flex-col p-4">
          <a href="/product">
            <img
              src={Image1}
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
              src={Image2}
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
      </div>
    </>
  );
};

export default BrandProducts;
