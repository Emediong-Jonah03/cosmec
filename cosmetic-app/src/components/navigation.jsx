import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-30 mx-auto ">
      <div className="container flex items-center justify-between px-4 py-3 sm:py-3 sm:px-8  mx-auto ">
        <div className="font-bold text-lg">Cosmec</div>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
         <CiMenuBurger />
          
        </button>
        <ul className="hidden sm:flex items-center gap-6">
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">Home</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">Shop</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">Skin Care</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">Hair Care</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300">About Us</li>
        </ul>
        <ul className="hidden sm:flex items-center gap-6">
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"><FaHeart /></li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"><FaSearch /></li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"><AiOutlineShoppingCart /></li>
          <li className="hover:text-green-600 cursor-pointer transition-colors duration-300"><FaUser /></li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><IoMdHome />Home</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><FaShoppingBag />Shop</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">Skin Care</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">Hair Care</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex">About Us</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><FaHeart /></li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><FaSearch /></li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><AiOutlineShoppingCart /></li>
            <li className="hover:text-green-600 cursor-pointer transition-colors duration-300 flex"><FaUser /></li>
          </ul>
        </div>
      )}
    </nav>
  );
}