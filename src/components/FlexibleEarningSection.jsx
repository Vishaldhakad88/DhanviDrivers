import React from "react";
import { motion } from "framer-motion";

// Update these image imports with your actual paths
import Earn1 from "../assets/heroimages/earn1.jpg";
import Earn2 from "../assets/heroimages/earn2.jpg";
import Earn3 from "../assets/heroimages/earn3.jpg";
import Earn4 from "../assets/heroimages/earn4.jpg";

const FlexibleEarningSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES GRID */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
          <img src={Earn1} className="w-full h-48 object-cover rounded-2xl shadow-md" />
          <img src={Earn2} className="w-full h-48 object-cover rounded-2xl shadow-md" />

          <img src={Earn3} className="w-full h-48 object-cover rounded-2xl shadow-md" />
          <img src={Earn4} className="w-full h-48 object-cover rounded-2xl shadow-md" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Flexible Hours & <br /> High Earnings
          </h2>

          <div className="w-20 h-1 bg-yellow-400 mt-3 mb-5 rounded-full"></div>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Join as a Dhanvi Drivers captain and earn on your own terms.
            Drive whenever you want.
          </p>

          <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-yellow-500 transition-all flex items-center gap-2 cursor-pointer">
            Start Earning →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FlexibleEarningSection;
