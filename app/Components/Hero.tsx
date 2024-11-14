import Image from "next/image";
import pandapic from "../../public/foodpanda-pic.png";
import pandafirepic from "../../public/fire-pic-panda.png";
import city1 from "../../public/bahawalpur (1).jpg";
import city2 from "../../public/karachi.jpg";
import city3 from "../../public/bahawalpur (3).jpg";
import city4 from "../../public/bahawalpur (4).jpg";

const Hero = () => {
  return (
    <main>
      <div className="sm:flex flex-1 justify-between ">
        <div>
          <h1 className="text-5xl text-gray-800  font-bold mt-16 sm:mt-40 ml-11 mb-0">
            It&apos;s the food and groceries you love delivered
          </h1>
          <div className="bg-white rounded-lg shadow-lg shadow-gray-400 p-4 w-10/12 ml-11 mt-5 ">
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Your street and street number                                                     Locate me..."
              className=" rounded-lg w-10/12 p-3 border border-black"
            />
            <button className="bg-[#FD367E] font-medium p-3 text-white ml-3 rounded-lg hover:text-sm duration-300 sm:mt-0 mt-5">
              Find food
            </button>
          </div>
        </div>

        <div>
          <Image src={pandapic} alt="pandapic" width={850} />
        </div>
      </div>

      <h2 className="text-4xl font-bold sm:mt-44 sm:ml-14 ml-4 mb-7 text-gray-800">
        You prepare the food we handle the rest
      </h2>
      <Image src={pandafirepic} alt="firepic" width={2000} />

      <div className="text-gray-700 bg-slate-50 shadow-lg shadow-gray-400 sm:m-20 sm:p-11 p-6 sm:w-4/12 w-11/12  ml-4 sm:mt-0 mt-7">
        <p className="font-bold text-xl">
          List your restaurant or shop on foodpanda
        </p>
        <p className="mt-5">
          Would you like millions of new customers to enjoy your amazing food
          and groceries? So would we!
        </p>
        <p className="mt-5">
          It&apos;s simple: we list your menu and product lists online help you
          process orders pick them up and deliver them to hungry pandas - in a
          heartbeat!
        </p>
        <p className="mt-5">Interested? Let&apos;s start our partnership today!</p>
        <button className="bg-[#FD367E] p-3 rounded-lg m-4 text-white font-bold hover:bg-pink-800  duration-300">
          Get started
        </button>
      </div>

      <h2 className="font-bold text-4xl sm:ml-28 text-gray-800 ml-4 sm:mt-0 mt-3">
        Find us in these cities and many more!
      </h2>
      <div>
      <div className="flex-1 sm:flex justify-center gap-7 mt-8 sm:ml-0 ml-11">
      <Image
    src={city4}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city3}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city1}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city2}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  
</div>

        <div className="flex justify-center space-x-72 mt-8">
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Bahawalpur
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Karachi
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Lahore
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Islamabad
          </h1>
        </div>
        <div className="flex-1 sm:flex justify-center gap-7 mt-8 sm:ml-0 ml-11">
  <Image
    src={city1}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  
  <Image
    src={city2}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city3}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city4}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
</div>

        <div className="flex justify-center mt-8 space-x-72">
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Bahawalpur
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Karachi
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Lahore
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Islamabad
          </h1>
        </div>
        <div className="flex-1 sm:flex justify-center gap-7 mt-8 sm:ml-0 ml-11">
        <Image
    src={city3}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city1}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  
  
  <Image
    src={city4}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city2}
    alt="City-1"
    width={300}
    className="rounded-xl sm:block hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
</div>

        <div className="flex justify-center mt-8 space-x-72">
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Bahawalpur
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Karachi
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Lahore
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Islamabad
          </h1>
        </div>
        <div className="flex-1 sm:flex justify-center gap-7 mt-8 sm:ml-0 ml-11">
  <Image
    src={city1}
    alt="City-1"
    width={300}
    className="rounded-xl sm:mt-0 mt-12 transform  transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city3}
    alt="City-1"
    width={300}
    className="rounded-xl sm:mt-0 mt-12 transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city2}
    alt="City-1"
    width={300}
    className="rounded-xl sm:mt-0 mt-12 transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <Image
    src={city4}
    alt="City-1"
    width={300}
    className="rounded-xl sm:mt-0 mt-12 transform transition-transform duration-300 ease-in-out hover:scale-110"
  />
</div>

        <div className="flex justify-center mt-8 space-x-72">
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Bahawalpur
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Karachi
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Lahore
          </h1>
          <h1 className="bg-white shadow-sm shadow-gray-500 p-2 rounded-lg sm:block hidden">
            Islamabad
          </h1>
        </div>
      </div>

      <h2 className="text-4xl sm:ml-28 font-bold sm:mt-14 sm:mb-0 mb-4">
        Put us in your pocket
      </h2>
      <div className="flex-1 sm:flex justify-between">
        <form>
          <div className="bg-pink-600 sm:p-5 p-4 sm:ml-24 sm:mt-10 rounded-2xl">
            <h3 className="text-center text-white font-bold text-2xl">
              {" "}
              Connect with us!
            </h3>
            <input
              type="text"
              placeholder="Your name"
              className="rounded-lg mb-7 mt-7 sm:w-full w-9/12 mr-5 sm:ml-0 ml-14 p-4 caret-pink-800 bg-slate-200"
            />{" "}
            <input
              type="text"
              placeholder="Your email"
              className="sm:ml-0 sm:w-full w-9/12 ml-14 rounded-lg sm:mb-0 mb-6 p-4 caret-pink-800 bg-slate-200"
            />
            <br />
            <input
              type="text"
              placeholder="Your city"
              className="rounded-lg mr-5 mb-8  p-4 sm:w-full w-9/12 caret-pink-800 sm:ml-0 sm:mt-6 ml-14 bg-slate-200"
            />{" "}
            <input
              type="text"
              placeholder="Your street"
              className="sm:ml-0 ml-14 sm:w-full w-9/12 rounded-lg mb-8 p-4 caret-pink-800 bg-slate-200"
            />
            <br />
            <p className="text-center bg-pink-700 sm:w-full w-6/12 sm:ml-0 ml-20 p-3 rounded-lg text-white shadow-sm shadow-pink-950 font-bold hover:shadow-none duration-300 ">
              Send email
            </p>
          </div>
        </form>
        <form>
          <div className="bg-pink-600 sm:p-5 p-4 sm:ml-24 sm:mt-10 mt-7 rounded-2xl">
            <h3 className="text-center text-white font-bold text-2xl">
              {" "}
              Order now!
            </h3>
            <input
              type="text"
              placeholder="Your name"
              className="rounded-lg mb-7 mt-7 sm:w-full w-9/12 mr-5 sm:ml-0 ml-14 p-4 caret-pink-800 bg-slate-200"
            />{" "}
            <input
              type="text"
              placeholder="Your email"
              className="sm:ml-0 sm:w-full w-9/12 ml-14 rounded-lg sm:mb-0 mb-6 p-4 caret-pink-800 bg-slate-200"
            />
            <br />
            <input
              type="text"
              placeholder="Your phone"
              className="rounded-lg mr-5 mb-8  p-4 sm:w-full w-9/12 caret-pink-800 sm:ml-0 sm:mt-6 ml-14 bg-slate-200"
            />{" "}
            <input
              type="text"
              placeholder="Your street"
              className="sm:ml-0 ml-14 sm:w-full w-9/12 rounded-lg mb-8 p-4 caret-pink-800 bg-slate-200"
            />
            <br />
            <p className="text-center bg-pink-700 sm:w-full w-6/12 sm:ml-0 ml-20 p-3 rounded-lg text-white shadow-sm shadow-pink-950 font-bold hover:shadow-none duration-300 ">
              Place order
            </p>
          </div>
        </form>
      </div>
      <div className="text-center text-balance">
        <h2 className="sm:w-3/6 sm:ml-80 text-4xl font-bold sm:mt-14">Order food and groceries online from the best restaurants and shops on foodpanda</h2>
        <p className="sm:w-3/6 sm:ml-80 sm:mt-4">Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.</p>
        <h2 className="sm:w-3/6 sm:ml-80 text-4xl font-bold sm:mt-7 ">What&apos;s new?</h2>
        <p className="sm:w-3/6 sm:ml-80 sm:mt-3">✓ Wide variety of restaurants and shops, an abundance of cuisines & products.</p>
        <p className="sm:w-3/6 sm:ml-36">✓ High quality delivery service.</p>
        <p className="sm:w-3/6 sm:ml-72">✓ NEW: foodpanda grocery delivery! Discover the best and more near you.</p>
        <h2 className="sm:w-3/6 sm:ml-80 text-4xl font-bold sm:mt-7">Which takeout restaurants open now near me?</h2>
        <p className="sm:w-3/6 sm:ml-80 sm:mt-3">You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>
      </div>
    </main>
  );
};

export default Hero;
