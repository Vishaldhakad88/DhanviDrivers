import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// MAIN BIG IMAGE (left side)
import appAd from "../assets/appAd.png";

// Button Icons (Play Store / App Store)
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";

export default function AppAdSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={appAd}
            alt="App Ad"
            className="w-[90%] md:w-[80%] lg:w-[70%] drop-shadow-2xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Book Your Ride in Just Seconds
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Dhanvi Drivers app gives you the fastest & easiest way to book{" "}
            <span className="font-semibold text-black">driver and taxi rides</span>.  
            Enjoy seamless travel with live tracking, verified drivers and
            affordable fares.
          </p>

          {/* BENEFITS LIST */}
          <div className="space-y-3">
            {[
              "Fastest driver & taxi booking experience",
              "Live ride tracking with accurate ETA",
              "Affordable fares with zero hidden charges",
              "Verified & trained drivers for your safety",
              "Instant customer support inside the app",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-500 text-xl drop-shadow-md" />
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={app1}
              alt="Download 1"
              className="w-40 cursor-pointer drop-shadow-xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={app2}
              alt="Download 2"
              className="w-40 cursor-pointer drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
