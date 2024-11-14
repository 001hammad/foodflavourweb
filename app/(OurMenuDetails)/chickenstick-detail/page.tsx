'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import burger1 from "../../../public/tikka.jpg"; // Use your burger image path

const KarahiDetail = () => {
  const [quantity, setQuantity] = useState(1);

  // Handle Add to Cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} burger(s) to cart`);
    // Simulate adding to cart logic here (you might want to update a state or send data to a cart service)
    alert(`${quantity} ChickenStick(s) added to the cart!`);  // Feedback for the user
  };

  // Handle Order Now
  const handleOrderNow = () => {
    console.log("Proceeding with order...");
    // Add your order handling logic here (like redirecting to checkout)
    alert("Proceeding to checkout...");  // Feedback for the user
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-6 lg:space-y-0 bg-white p-6 rounded-lg shadow-xl w-full lg:w-2/3">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={burger1}
            alt="Burger"
            className="object-cover w-full h-72 lg:h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 p-4 space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">The Catalyzer</h2>
          <p className="text-lg text-gray-600">
            A delicious burger with a secret sauce and premium ingredients!
          </p>
          <p className="text-xl text-gray-800 font-semibold">$16.00</p>

          {/* Quantity Selection */}
          <div>
            <label htmlFor="quantity" className="text-sm text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              className="w-20 mt-2 p-2 border border-gray-300 rounded-lg"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="px-8 py-3 bg-white border-2 border-[#FD367E] text-[#FD367E] rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#FD367E] hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>

            {/* Order Now Button */}
            <button
              onClick={handleOrderNow}
              className="px-8 py-3 bg-[#FD367E] text-white rounded-lg shadow-lg transform hover:scale-105 hover:bg-white hover:text-[#FD367E] transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Call Button (For Mobile/Support) */}
          <div className="mt-6">
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg transform hover:scale-105 hover:bg-green-600 transition-all duration-300">
              Call Now
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link href='/Getstart'>
              <button className="bg-[#FD367E] p-3 rounded-xl text-white font-bold animate-pulse hover:bg-[#FF1C68] transition-all duration-300">
                Back To Meno
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KarahiDetail;
