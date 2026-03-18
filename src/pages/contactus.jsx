import React from "react";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <div className="w-full">

      {/* 🔥 Banner */}
      <div className="relative h-100">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="contact banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* 📩 Contact Form */}
        <motion.div
          className="bg-gray-100 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-amber-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-amber-700 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-amber-700 outline-none"
            ></textarea>

            <button className="w-full bg-yellow-900 text-white py-3 rounded-lg hover:bg-yellow-800 transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* 📍 Contact Info */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold">Contact Information</h2>

          <p className="text-gray-700">
            📍 Location: Brewcart Coffee Shop, Hyderabad
          </p>

          <p className="text-gray-700">
            📞 Phone: +91 98765 43210
          </p>

          <p className="text-gray-700">
            📧 Email: support@brewcart.com
          </p>

          <p className="text-gray-700">
            ⏰ Working Hours: 9:00 AM – 10:00 PM
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contactus;