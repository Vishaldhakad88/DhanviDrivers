import React from "react";
import { motion } from "framer-motion";
import Rides1 from "../assets/heroimages/Rides1.jpg";

const QuickRidesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE CONTENT */}
       

 <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Get Quick Rides, <br /> Low Fares
            
                      </h2>

          <div className="w-20 h-1 bg-yellow-400 mt-3 mb-5 rounded-full"></div>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
             In Dhanvi Drivers we ensure our customers get rides quickly at the
            most affordable prices.
          </p>

         {/* Button */}
          <button className="mt-3 px-6 py-3 bg-gray-900 hover:bg-yellow-500 text-white font-semibold rounded-xl transition-all shadow-md cursor-pointer">
            Book Now
          </button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={Rides1}
            alt="Quick Rides"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default QuickRidesSection;
