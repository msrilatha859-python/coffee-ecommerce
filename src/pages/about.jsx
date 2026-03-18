import React from "react";
import { motion, px } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-full">

      {/* 🔥 Banner Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="coffee banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h1>
          <p className="mt-2 text-lg">Every cup tells a story ☕</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12 max-w-6xl mx-auto">

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          
          <motion.img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="coffee shop"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
            <p className="text-gray-700 mb-3">
              Welcome to Coffee House, where passion meets flavor. We serve
              freshly brewed coffee made from high-quality beans sourced from
              trusted farms.
            </p>
            <p className="text-gray-700">
              Our goal is to create a warm and relaxing space for coffee lovers
              to enjoy their favorite drinks and spend quality time.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
       <div className="mb-12">

  <motion.div
    className=" bg-[#fdf8f3] p-8 rounded-2xl shadow-lg max-w-8xl mx-auto"
    whileHover={{ scale: 1.03 }}
  >
    <h2 className="text-3xl font-bold mb-6 text-center">
      Why Choose Us
    </h2>

    <ul className="space-y-4 text-gray-700">
      <li className="flex items-center gap-3">
        ☕ <span>Fresh and premium coffee beans</span>
      </li>
      <li className="flex items-center gap-3">
        🍵 <span>Wide variety of drinks</span>
      </li>
      <li className="flex items-center gap-3">
        🏡 <span>Cozy and friendly atmosphere</span>
      </li>
      <li className="flex items-center gap-3">
        ⭐ <span>Excellent customer service</span>
      </li>
    </ul>

  </motion.div>

</div>

        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h3 className="text-xl font-semibold mb-2">👉🏾 Our Vision</h3>
            <p className="text-gray-700 mb-5">
              To become a favorite destination for coffee lovers by offering
              exceptional taste and service.
            </p>
            <h3 className="text-xl font-semibold mb-2">👉🏾 Our Mission</h3>
            <p className="text-gray-700">
              To provide the best coffee experience with quality, consistency,
              and customer satisfaction.
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="coffee cup"
            className="rounded-xl shadow-lg h-100 w-100 object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;