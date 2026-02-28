import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaBars,FaTimes, FaShoppingCart, FaSearch} from "react-icons/fa";
import Shop from "../pages/shop";
function Navbar({cartCount}) {
    const [isOpen,setIsOpen] = useState(false);
    
    return(
        <nav className="bg-[#C4A484] py-1 sticky shadow-lg top-0 z-50">
            <div className=" max-w-7xl mx-auto px-6 flex justify-between items-center">
    {/* Logo */}
    <div className="w-14 h-14">
        <img 
            src="/cofee-logo.png" 
            alt="BrewCart Logo" 
            className="w-full h-full object-contain"
        />
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-5 text-lg font-semibold">
        <Link to="/">
            <li className="hover:text-white cursor-pointer">Home</li>
        </Link>
        <Link to="/shop">
            <li className="hover:text-white cursor-pointer">Shop</li>
        </Link>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
    </ul>
    <div className="hidden md:flex items-center gap-6 text-xl">

          {/* Search Icon */}
          <FaSearch className="cursor-pointer hover:text-white" />

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="hover:text-white" />
            <Link to="/cart">
            <span className="absolute -top-2 -right-3 bg-white text-black text-xs px-2 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
            </Link>
          </div>
          </div>
    {/*Hamburger menu */}
    <div className="md:hidden flex text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen? <FaTimes/>:<FaBars/>}
    </div>
</div>
<div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 mt-4" : 
    "max-h-0 overflow-hidden" }`}>
        {isOpen && (
        <ul className="flex flex-col gap-2 p-4 text-white text-lg">
            <li onClick= {() => setIsOpen(false)}className="hover:text-[#C4A484] cursor-pointer">Home</li>
            <li onClick={() => setIsOpen(false)}className="hover:text-[#C4A484] cursor-pointer">Shop</li>
            <li onClick={() => setIsOpen(false)}className="hover:text-[#C4A484] cursor-pointer">About</li>
            <li onClick={() => setIsOpen(false)}className="hover:text-[#C4A484] cursor-pointer">Contact</li>
        </ul>
        )}
    </div>

</nav>
    )
}
export default Navbar