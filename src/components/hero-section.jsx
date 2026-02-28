import React from "react";

function Herosection() {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh]">
      
      {/* Banner Image */}
      <img
        src="/cofee-banner.png"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Buttons Positioned Below Brand Name */}
      <div className="
        absolute 
        top-[65%] md:top-[60%] 
        left-1/2 md:left-[10%] 
        -translate-x-1/2 md:translate-x-0
        flex flex-col md:flex-row 
        gap-4 md:gap-6
        items-center
      ">
        <button className="bg-[#C4A484] text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Shop Now
        </button>

        <button className="border-2 border-[#C4A484] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#C4A484] hover:text-black transition duration-300">
          Explore Menu
        </button>
      </div>

    </div>
  );
}

export default Herosection;