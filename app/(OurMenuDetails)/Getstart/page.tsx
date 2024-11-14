'use client'

import { SiFoodpanda } from "react-icons/si";
import Link from "next/link";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import burger1 from '../../../public/burger-1.jpg';
import karahi from '../../../public/karahi.png';
import seekh from '../../../public/seekh.png';
import tikka from '../../../public/tikka.jpg';
import egg from '../../../public/egg.png';
import korma from '../../../public/korma.png';
import haleem from '../../../public/haleem.png';
import biryani from '../../../public/biryani.jpg';
import Image from "next/image";
import pandap from '../../../public/pandap.png';
const Navbar = () => {

  return (
    <div>
      {/* Upper Section: For large screens, we want the address to show. */}
      <div className="flex justify-between bg-white sm:w-full shadow-xl sm:p-9 p-4 fixed">
        <div className="flex items-center sm:gap-3">
          <SiFoodpanda className="text-3xl bg-[#FD367E] text-white cursor-pointer sm:p-1 rounded-md sm:block hidden" />
          <p className="font-bold text-[#FD367E] mt-2 text-xl">foodpanda</p>

          {/* Location and address for large screens */}
          <div className="flex items-center sm:ml-72 ml-4">
            <GrLocation className="text-xl text-gray-600 mt-2" />
            <p className="hidden sm:block ml-2 mt-2 text-lg font-bold text-gray-600">
              New address RAO STATE AND BUILDERS Karachi
            </p>
          </div>
        </div>

        {/* Right Section: Buttons and icons */}
        <div className="flex sm:space-x-6 space-x-9 items-center">
            <Link href='/'><button className="bg-[#FD367E] p-3 rounded-xl text-white font-bold animate-pulse">BackNow</button></Link>
          <button className="border border-gray-500 sm:w-20 rounded-lg p-3 font-bold sm:block hidden hover:text-sm duration-200">
            Log in
          </button>
          <button className="sm:w-24 bg-[#FD367E] text-white p-3 rounded-lg font-bold sm:block hidden hover:bg-pink-800 hover:text-sm duration-300">
            Sign up
          </button>

          {/* Language selector and icons */}
          <p className="mt-3 cursor-pointer">
            <GrLanguage className="cursor-pointer hover:border hover:border-pink-900 hover:rounded-full" />
          </p>
          <p className="mt-2 cursor-pointer">EN</p>

          <p className="mt-3 cursor-pointer">
            <IoIosArrowDown className="text-[#FD367E] hidden sm:block  hover:border hover:border-pink-900 hover:rounded-full cursor-pointer text-xl" />
          </p>
          <p className="mt-3 cursor-pointer">
            <MdOutlineShoppingBag className="text-2xl sm::border hidden sm:block  hover:border-pink-900 hover:rounded-full cursor-pointer sm:mr-14 mr-0" />
          </p>
        </div>
      </div>

      {/* Mobile-specific navbar section */}
      <div className="sm:hidden flex justify-between items-center bg-[#FD367E] text-white p-4">
        {/* Mobile version of the logo */}
        <SiFoodpanda className="text-3xl bg-white text-[#FD367E] cursor-pointer sm:p-1 rounded-md" />
        <p className="font-bold text-white text-xl">foodpanda</p>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3">
          <MdOutlineShoppingBag className="text-2xl" />
          <IoIosArrowDown className="text-white text-xl" />
        </div>
      </div>
      <div className="flex justify-center">
  <input type="text" className="border sm:w-[70%] p-5 rounded-full mt-10 text-xl" placeholder=" Q     Search for restraunt, cuisine and dishes" />
</div>
<div className="sm:flex">
<h2 className="text-4xl font-bold text-gray-700 sm:m-44 bg-slate-100 shadow-2xl p-8 ">Amazing Deals go below select your favourite dishes</h2>
<div className="flex justify-end">
    <Image src={pandap} alt="pandapic" width={500}/>
</div>
</div>
<p className="text-3xl font-bold text-gray-800 sm:ml-64 ml-16 sm:mt-5">Your daily deals</p>
<section className="text-gray-600 body-font">
  <div className="container px-5 pb-24 mt-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/burger-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={burger1}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Zinger Burger
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/biryani-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={biryani}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Chicken Biryani
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/karahi-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={karahi}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Karahi
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/chickenstick-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={tikka}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Chicken Sticks
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/seekh-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={seekh}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Seekh Boti
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/korma-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={korma}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Korma
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/haleem-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={haleem}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Haleem
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/egg-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={egg}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Breakfast
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/burger1-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={burger1}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Korean Burger
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/biryani-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={biryani}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Hindi Biryani
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/karahi-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={karahi}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Spicy Korma
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/tikka-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={tikka}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/seekh-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={seekh}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/korma-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={korma}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/haleem-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={haleem}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/egg-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src={egg}
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 pb-24 mt-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/burger-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/burger-1.jpg"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/biryani-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/biryani.jpg"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/karahi-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/karahi.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/tikka-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/tikka.jpg"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/seekh-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/seekh.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/korma-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/korma.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/haleem-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/haleem.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/egg-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/egg.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 pb-24 mt-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/juice1-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice1.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice2-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice2.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice3-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice3.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice4-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice4.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice5-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice5.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice6-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice6.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice7-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice7.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href="/juice8-detail">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
              src="/juice8.png"
            />
          </div>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="text-gray-600 body-font bg-[#FD367E]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
            Button
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Bitters chicharrones fanny pack
          <br className="lg:block hidden" />
          waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2024 panda web —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @hammad
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>



    </div>
  );
};

export default Navbar;
