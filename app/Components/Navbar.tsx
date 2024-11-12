import { SiFoodpanda } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center sm:gap-7 bg-[#FD367E]  p-4 sm:p-2 text-white '>
        <p><SiFoodpanda className="sm:text-4xl text-2xl sm:mt-2 sm:block hidden"/></p>
      <h2 className="sm:mt-3 sm:font-extrabold sm:text-xl text-lg sm:mr-0 ">Do you need a business account?</h2>
      <button className=" sm:p-3 border border-white  rounded-lg font-bold hover:text-black hover:bg-slate-100 duration-300 ">SIGN UP NOW</button>
    </div>
        <div className="flex justify-between bg-white sm:w-full   shadow-xl  sm:p-3 p-4">
        <div className="flex sm:ml-20 sm:gap-3">
        <p><SiFoodpanda className="text-3xl sm:mt-2 bg-[#FD367E] text-white cursor-pointer sm:p-1 rounded-md sm:block hidden"/></p>
        {/* <p><FaRegUser className="mt-3 mr-16 ml-4"/></p> */}
        <p className="font-bold text-[#FD367E] mt-2 text-xl">foodpanda</p>
        </div>
        <div className="flex sm:space-x-6 space-x-9">
            <button className=" border border-gray-500 sm:w-20   rounded-lg font-bold sm:block hidden hover:text-sm  duration-200">Log in</button>
            <button className=" sm:w-24 bg-[#FD367E] text-white rounded-lg font-bold sm:block hidden hover:bg-pink-800 hover:text-sm duration-300">Sign up</button>
            <p className="mt-3"><GrLanguage  className="cursor-pointer hover:border hover:border-pink-900 hover:rounded-full"/></p>
            <p className="mt-2 cursor-pointer">EN</p>
            <p className="mt-3"><IoIosArrowDown className="text-[#FD367E] hover:border hover:border-pink-900 hover:rounded-full cursor-pointer text-xl"/></p>
            <p className="mt-3"><MdOutlineShoppingBag className="text-2xl hover:border hover:border-pink-900 hover:rounded-full cursor-pointer sm:mr-14 mr-0"/></p>
        </div>
    </div>
    </div>
  )
}

export default Navbar;
