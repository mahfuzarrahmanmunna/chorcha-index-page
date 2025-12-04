import Link from "next/link";

const MainNavbar = () => {
  return (
    <nav className="bg-white py-3 px-24 text-black md:flex justify-between items-center hidden">
      <Link href={''} className=" flex justify-between">Phone</Link>
      <Link href={''} className=" flex justify-between">Outfit</Link>
      <Link href={''} className=" flex justify-between">Laptop</Link>
      <Link href={''} className=" flex justify-between">Furniture</Link>
      <Link href={''} className=" flex justify-between">Smart Gadgets</Link>
      <Link href={''} className=" flex justify-between">DIY</Link>
      <Link href={''} className=" flex justify-between">Kitchen</Link>
      <Link href={''} className=" flex justify-between">Smart TV</Link>
      <Link href={''} className=" flex justify-between">Medicine</Link>
      <Link href={''} className=" flex justify-between">Baby Products</Link>
    </nav>
  );
};

export default MainNavbar;
