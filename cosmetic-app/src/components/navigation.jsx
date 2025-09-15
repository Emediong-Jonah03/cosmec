import { useState } from "react";
export default function NavBar() {
 

  return (
    <section>
      <nav className="flex fixed items-center justify-between sm:justify-around text-sm py-3 shadow flex-col sm:flex-row  bg-white h-full sm:h-11 z-30 top-5 right-0 sm:inset-x-0 sm:px-4 m-0" >
        <div>Cosmec</div>
        <ul className="flex items-center justify-evenly gap-6 flex-col w-70 sm:flex-row sm:w-fit ">
          <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">Home</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">Shop</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">Skin Care</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">Hair Care</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">About Us</li>
        </ul>
        <div>
          <ul className="flex items-center justify-evenly gap-6 flex-col w-70 sm:flex-row sm:w-fit">
            <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">like</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">magnify</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">cart</li>
            <li className="hover:text-green-600 cursor-pointer transition-colors-0.3s">user</li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
