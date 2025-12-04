const { CarTaxiFront } = require("lucide-react");

const MobileNav = () => {
  return (
    <nav className="flex justify-between px-6 py-4 md:hidden">
      <figure className="w-8 h-8 rounded-full ">
        <img
          src="https://i.ibb.co.com/Sw91ysGG/e4bb2dadd2525836c558789f9cd457cfeb46c5e5-1.png"
          alt="profile image"
          className="rounded-full"
        />
      </figure>

      <figure>
        <img src="https://i.ibb.co.com/rGZ9FKfQ/Frame-3473714.png" alt="" />
      </figure>

      <div className="px-4  rounded-full flex gap-2 bg-gray-700 items-center  ">
        <CarTaxiFront className="w-5"/>
        <h4>2</h4>
      </div>
    </nav>
  );
};

export default MobileNav