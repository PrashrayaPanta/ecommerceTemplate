import React from "react";

const CartBtn = () => {
  return (
    <>
      <button class="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
        <i class="fas fa-cart-plus mr-2"></i> Add to cart
      </button>
    </>
  );
};

export default CartBtn;
