import { CarTaxiFront, Search, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-3 bg-black hidden md:flex justify-between px-24">
      <div className="flex items-center gap-11">
        <figure>
          <img
            src="https://i.ibb.co.com/rGZ9FKfQ/Frame-3473714.png"
            alt="chorcha logo"
          />
        </figure>
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products..."
            className="px-12 py-2 rounded-full bg-white text-gray-800 placeholder:text-gray-600"
          />
          <div className="">
            <Search className="absolute top-2 left-4 text-gray-800 w-5" />
          </div>
          <div className="bg-green-500  w-7 h-7 absolute top-2 right-3 flex items-center justify-center rounded-full">
            <Search className=" text-gray-800 w-5 " />
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex justify-between px-5 py-2 gap-3 items-center rounded-full bg-gray-700">
          <div className="flex items-center text-white gap-3">
            <CarTaxiFront className="w-8"/>
            <div>
              <h4 className="text-base font-medium">CART</h4>
              <p className="text-sm">2 Items</p>
            </div>
          </div>
          <div></div>
          <h2>
            ৳ 549
          </h2>
        </div>

        <div className="py-2 px-6 bg-white text-black flex justify-between items-center gap-5 rounded-full">
            <User2 className=" w-8 text-green-600"/>
            <h2 className="text-xl font-semibold ">
                Login
            </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
