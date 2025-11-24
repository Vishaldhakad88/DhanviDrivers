import React from "react";
import { motion } from "framer-motion";
import SafetyImg from "../assets/heroimages/Safety.jpg";

const SafetySection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Safety for all
          </h2>

          <div className="w-20 h-[3px] bg-yellow-400 mt-3 mb-5 rounded-full"></div>

          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            At Dhanvi Drivers, your safety is our priority.  
            We’re dedicated to making every ride safe and comfortable.
          </p>

          <button className="text-xl text-blue-600 font-semibold cursor-pointer hover:underline flex items-center gap-2">
            Know More →
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={SafetyImg}
            alt="Safety"
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SafetySection;
