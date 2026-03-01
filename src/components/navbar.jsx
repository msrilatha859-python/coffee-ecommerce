import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes, FaShoppingCart, FaSearch,FaUser} from "react-icons/fa";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#C4A484] py-3 sticky shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="w-14 h-14">
          <img
            src="/cofee-logo.png"
            alt="BrewCart Logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold items-center">
          <Link to="/">
            <li className="hover:text-white cursor-pointer">Home</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-white cursor-pointer">Shop</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-white cursor-pointer">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-white cursor-pointer">Contact</li>
          </Link>
        </ul>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-xl">

          <FaSearch className="cursor-pointer hover:text-white transition" />

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="hover:text-white transition" />
            <span className="absolute -top-2 -right-3 bg-white text-black text-xs px-2 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
          </Link>

          {/* User */}
          <Link to="/signin" className="hover:text-white transition">
            <FaUser />
          </Link>
        </div>

        {/* Mobile Icons + Hamburger */}
        <div className="md:hidden flex items-center gap-5 text-xl">

          <Link to="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-white text-black text-xs px-2 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
          </Link>

          <Link to="/signin">
            <FaUser />
          </Link>

          <div
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#b89372] mt-3 py-4">
          <ul className="flex flex-col items-center gap-4 text-lg font-semibold text-white">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li>Home</li>
            </Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              <li>Shop</li>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <li>About</li>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;