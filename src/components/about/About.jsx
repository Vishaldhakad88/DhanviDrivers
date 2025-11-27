import React from "react";
import { motion } from "framer-motion";

// About Images
import aboutTaxi1 from "../../assets/aboutTaxi1.jpg";
import aboutTaxi2 from "../../assets/aboutTaxi2.jpg";

// Founder Images
import funder1 from "../../assets/funder1.png";
import funder2 from "../../assets/funder2.png";
import funder3 from "../../assets/funder3.png";

export default function About() {
  return (
    <>
      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow-100 rounded-l-[200px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              India’s Beloved <br />
              <span className="text-yellow-500">Bike Taxi Service</span>
            </h2>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                We are not an option, we are a choice
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We’re the #1 choice of millions of riders because we solve
                India’s intra-city travel problems. With assured safety, we
                offer the most affordable and convenient bike taxi rides.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">What makes us different?</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Our bike taxis reduce your travel time dramatically! During peak
                hours, our riders can quickly navigate through traffic and drop
                you to your destination faster. When you think travel, think
                Dhanvi Drivers.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg w-[85%] ml-auto">
              <img
                src={aboutTaxi1}
                className="w-full h-[380px] object-cover"
                alt="Bike Taxi"
              />
            </div>

            <div className="absolute -left-8 top-10 w-[160px] h-[160px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src={aboutTaxi2}
                className="w-full h-full object-cover"
                alt="Taxi"
              />
            </div>

            <div className="absolute left-0 bottom-6 w-[25px] h-[140px] bg-yellow-500 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FOUNDER SECTION ---------------- */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Round Shape */}
        <div className="absolute left-0 top-0 w-[45%] h-[90%] bg-yellow-100 rounded-r-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* SECTION TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Champions of our success story
          </h2>

          {/* Yellow Line */}
          <div className="w-20 h-1 bg-yellow-500 mt-2 mb-6"></div>

          {/* CONTENT */}
          <p className="max-w-2xl text-gray-700 leading-relaxed mb-12">
            Dhanvi Drivers has come a long way with continuous dedication and
            hard work. With a strong vision and passion, we have built a trusted
            place in the market. As a brand and a service, we constantly aim to
            grow, evolve, and redefine the commuting experience.
          </p>

          {/* FOUNDERS GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pt-4">
            {/* CARD 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
                <img
                  src={funder1}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mt-4">Rishikesh S R</h4>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
                <img
                  src={funder2}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mt-4">Pavan Guntupalli</h4>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400">
                <img
                  src={funder3}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mt-4">Aravind Sanka</h4>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
