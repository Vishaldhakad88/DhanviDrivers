import React from "react";
import { motion } from "framer-motion";

// FIXED: Correct paths & extensions
// import press1 from "../assets/press/press1.jpg";
import press1 from "../assets/press1.jpg"
import press2 from "../assets/press2.jpg";
import press3 from "../assets/press3.jpg";
 
export default function PressSection() {
  const pressData = [
    {
      id: 1,
      image: press1,
      title: "Dhanvi Drivers Launches Fastest Bike Taxi Fleet in India",
      desc: "Dhanvi Drivers is transforming urban mobility with an expanded bike taxi fleet, ensuring faster, safer and more affordable city rides for millions of commuters.",
      link: "#",
    },
    {
      id: 2,
      image: press2,
      title: "Dhanvi Introduces Smart Driver Analytics",
      desc: "New AI-powered driver analytics improves ride efficiency, reduces ETA errors and enhances customer satisfaction with real-time tracking and precision routing.",
      link: "#",
    },
    {
      id: 3,
      image: press3,
      title: "Dhanvi Drivers Raises Funding for National Expansion",
      desc: "Dhanvi Drivers secures strategic investment to expand operations across major cities, boosting employment and improving on-demand urban transport.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white font-[Inter]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Press <span className="text-yellow-500">and Media</span>
        </motion.h2>

        {/* Subtitle Divider */}
        <div className="w-24 h-1 bg-yellow-500 mt-3 mb-10"></div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pressData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-5 border border-gray-100"
            >
              
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt="press"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Button */}
              <a href={item.link}>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg shadow hover:bg-gray-800 hover:text-white transition">
                  Read More
                </button>
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
